import { type WPPosts, type WPPost, type WPProduct, type Collection, type User, type Costumer } from '@/types'
import { request, gql, GraphQLClient } from 'graphql-request'
import { getRandomNumber } from './utils'

const graphqlUrl = process.env.WP_GRAPHQL_URL
const graphqlToken = process.env.WORDPRESS_AUTH_REFRESH_TOKEN
const graphQLClient = new GraphQLClient(graphqlUrl!, {
  headers: {
    Authorization: `Bearer ${graphqlToken}`
  }
})

/**
 * Retrieves all posts from the GraphQL API.
 *
 * @return {Promise<Array<WPPost>>} An array of WPPost objects representing all the posts.
 * @throws {Error} If there is an error fetching the post data.
 */
export const getAllPosts = async (): Promise<Array<WPPost['post']>> => {
  const query = gql`
  {
  posts {
    nodes {
      title
      content
      excerpt
      date
      slug
      id
      featuredImage {
        node {
          mediaItemUrl
          altText
        }
      }
    }
  }
}
  `

try {
  const allPosts: any = await request(graphqlUrl!, query)
  return allPosts.posts.nodes as Array<WPPost['post']>
} catch (error) {
  console.error('Error fetching post:', error)
    throw new Error('Failed to fetch post data.')
}
}

/**
 * Retrieves a post by its ID.
 *
 * @param {string} id - The ID of the post to retrieve.
 * @return {Promise<WPPost>} The post data as a WPPost object.
 * @throws {Error} If there is an error fetching the post data.
 */
export const getPostById = async (id: string): Promise<WPPost['post']> => {
  const decodedId = decodeURIComponent(id)

  const query = gql`
    query GetPost($id: ID!) {
      post(id: $id) {
        content(format: RENDERED)
        date
        excerpt
        title
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
      }
    }
  `

  const variables = { id: decodedId }

  try {
    const post: WPPost = await request(graphqlUrl!, query, variables)
    return post.post
  } catch (error) {
    console.error('Error fetching post:', error)
    throw new Error('Failed to fetch post data.')
  }
}

/**
 * Retrieves the related posts for a given ID.
 *
 * @param {string} id - The ID of the post.
 * @return {Promise<Array<WPPost>>} An array of related WPPost objects.
 * @throws {Error} If there is an error fetching the post data.
 */
export const getRelatedPost = async (id: string): Promise<WPPost[]> => {
  const query = gql`
 query NewQuery($notIn: [ID]) {
  posts(where: {notIn: $notIn}, first: 3) {
    nodes {
      excerpt
      title
      id
      featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
    }
  }
}
  `

  const decodedId = decodeURIComponent(id)
  const variables = { notIn: decodedId }

  try {
    const posts: WPPosts = await request(graphqlUrl!, query, variables)
    return posts.posts.nodes
  } catch (error) {
    console.error('Error fetching post:', error)
    throw new Error('Failed to fetch post data.')
  }
}

/**
 * A function that creates a new customer.
 *
 * @param {string | null | undefined} email - The email of the customer.
 * @param {string | null | undefined} username - The username of the customer.
 * @return {Promise<any>} A promise that resolves to the created customer or the existing customer if already present.
 */
export const createCostumer = async (email: string | null | undefined, username: string | null | undefined): Promise<Costumer | User> => {
  const existingCostumer = await getCostumerByEmail(email)

  const createCostumerQuery = gql`
  mutation MyMutation($email: String, $username: String,) {
    registerCustomer(
      input: {email: $email, username: $username}
    ) {
      customer {
        id
        email
        username
      }
    }
  }
  `

  const variables = { email, username }

  if (existingCostumer.length === 0) {
    try {
      const user: any = await graphQLClient.request(createCostumerQuery, variables)
      return user as User
    } catch (error) {
      console.error('Error fetching post:', error)
      throw new Error('Failed to fetch post data.')
    }
  }

  return existingCostumer[0]
}

/**
 * Retrieves a customer by their email address from the database.
 *
 * @param {string | null | undefined} email - The email address of the customer.
 * @return {Promise<Array<{ email: string; id: string; username: string }>>} A promise that resolves to an array of customer objects with email, id, and username properties.
 * @throws {Error} If there is an error fetching the customer data.
 */
export const getCostumerByEmail = async (email: string | null | undefined): Promise<User['nodes']> => {
  const CostumerByEMailQuery = gql`
  query CostumerByEMailQuery($email: String) {
  customers(where: {email: $email}) {
    nodes {
      email
      id
      username
    }
  }
}
  `

 const variables = { email }

  try {
    const user: any = await graphQLClient.request(CostumerByEMailQuery, variables)
    return user.customers.nodes as User['nodes']
  } catch (error) {
    console.error('Error fetching post:', error)
    throw new Error('Failed to fetch post data.')
  }
}

/**
 * Retrieves a list of products based on the given quantity.
 *
 * @param {number} quantity - The number of products to retrieve.
 * @return {Promise<WPProduct[]>} A promise that resolves to an array of WPProduct objects representing the products.
 * @throws {Error} If there is an error fetching the products.
 */
export const getProductsByQuantity = async (quantity: number): Promise<WPProduct[]> => {
  const ProductsByQuantityQuery = gql`
    query MyQuery($first: Int, $after: String) {
  products(first: $first, after: $after, where: { tagIn: "model-d" }) {
    nodes {
      id
      image {
        sourceUrl
        date
      }
      name
      onSale
      ... on VariableProduct {
        id
        name
        content
        price
        variations(first: 30) {
          nodes {
            image {
              sourceUrl
            }
            name
          }
        }
        productCategories {
          nodes {
            name
          }
        }
        attributes {
          nodes {
            options
          }
        }
      }
    }
  }
}
  `

  const variable = { first: quantity, after: getRandomNumber(40) }

  try {
    const products: any = await graphQLClient.request(ProductsByQuantityQuery, variable)
    return products.products.nodes as WPProduct[]
  } catch (error) {
    console.error('Error fetching post:', error)
    throw new Error('Failed to fetch post data.')
  }
}

/**
 * Retrieves a list of products based on the given categories and gender.
 *
 * @param {string} categories - The categories to filter the products.
 * @param {string} gender - The gender category to filter the products.
 * @return {Promise<any>} A promise that resolves to an array of products nodes.
 */
export const getProductsByCategories = async (categories: string, gender: string): Promise<WPProduct[]> => {
  const ProductsByCategoriesQuery = gql`
    query MyQuery($categoryIn: [String], $gender: String) {
    products(where: {categoryIn: $categoryIn, tagIn: "model-d", category: $gender }) {
      nodes {
        id
        image {
          sourceUrl
          date
        }
        name
        onSale
        ... on VariableProduct {
          id
          name
          content
          price
          variations(first: 30) {
            nodes {
              image {
                sourceUrl
              }
              name
            }
          }
          productCategories {
            nodes {
              name
            }
          }
          attributes {
            nodes {
              options
            }
          }
        }
      }
    }
  }
  `

  const variables = { categoryIn: categories, gender }

  try {
    const products: any = await graphQLClient.request(ProductsByCategoriesQuery, variables)
    return products.products.nodes as WPProduct[]
  } catch (error) {
    console.error('Error fetching post:', error)
    throw new Error('Failed to fetch post data.')
  }
}

/**
 * Retrieves a single product by its ID and returns the product details.
 *
 * @param {string} id - The ID of the product to retrieve.
 * @return {WPProduct} The product details as a WPProduct object.
 */
export const getSingleProductById = async (id: string): Promise<WPProduct> => {
  const decodedId = decodeURIComponent(id)

  const ProductByIdQuery = gql`
  query MyQuery($id: ID!) {
  product(id: $id) {
    date
    name
    onSale
    ... on VariableProduct {
      id
      name
      price
      variations(first: 30) {
        nodes {
          image {
            sourceUrl
          }
          name
        }
      }
      content
    }
    productCategories {
      nodes {
        name
      }
    }
    attributes {
      nodes {
        options
      }
    }
    upsell {
      nodes {
        name
        id
        ... on VariableProduct {
          id
          name
          variations(first: 30) {
        nodes {
          image {
            sourceUrl
          }
          name
        }
      }
        }
      }
    }
  }
}
  `

  const variable = { id: decodedId }

  try {
    const product: any = await graphQLClient.request(ProductByIdQuery, variable)
    return product.product as WPProduct
  } catch (error) {
    console.error('Error fetching post:', error)
    throw new Error('Failed to fetch post data.')
  }
}

/**
 * Retrieves a list of products based on the given gender.
 *
 * @param {string} gender - The gender of the products to retrieve.
 * @return {Promise<Collection>} A promise that resolves to a Collection object containing the products.
 * @throws {Error} If there is an error fetching the products.
 */
export const getProductsByGender = async (gender: string): Promise<Collection> => {
  const ProductsByGenderQuery = gql`
    query MyQuery($category: String) {
    products(where: {category: $category, tagIn: "model-d"}, first: 4) {
      nodes {
        ... on VariableProduct {
          id
          name
          image {
            sourceUrl
          }
          price
          productCategories {
          nodes {
            name
          }
        }
        }
      }
    }
  }
  `

  const variables = { category: gender }

  try {
    const product: any = await graphQLClient.request(ProductsByGenderQuery, variables)
    return product.products as Collection
  } catch (error) {
    console.error('Error fetching post:', error)
    throw new Error('Failed to fetch post data.')
  }
}

/**
 * Retrieves a list of products that are featured.
 *
 * @return {WPProduct[]} An array of WPProduct objects representing the featured products.
 */
export const getProductsByFeatured = async (categories: string = 'camisetas'): Promise<WPProduct[]> => {
  const ProductsByFeaturedQuery = gql`
  query MyQuery($categoryIn: [String]) {
  products(where: {featured: true, categoryIn: $categoryIn}) {
    nodes {
      id
      image {
        sourceUrl
        date
      }
      name
      onSale
      ... on VariableProduct {
        id
        name
        content
        price
        variations(first: 30) {
          nodes {
            image {
              sourceUrl
            }
            name
          }
        }
        productCategories {
          nodes {
            name
          }
        }
        attributes {
          nodes {
            options
          }
        }
      }
    }
  }
}
  `

  const variables = { categoryIn: categories }

  try {
    const products: any = await graphQLClient.request(ProductsByFeaturedQuery, variables)
    return products.products.nodes as WPProduct[]
  } catch (error) {
    console.error('Error fetching post:', error)
    throw new Error('Failed to fetch post data.')
  }
}

/**
 * Retrieves a list of products that are on sale.
 *
 * @return {Promise<WPProduct[]>} A promise that resolves to an array of WPProduct objects representing the products on sale.
 * @throws {Error} If there is an error fetching the products.
 */
export const getProductsByOferts = async (): Promise<WPProduct[]> => {
  const ProductsByOfertQuery = gql`
  query MyQuery {
  products(where: {onSale: true}) {
    nodes {
      id
      image {
        sourceUrl
        date
      }
      name
      onSale
      ... on VariableProduct {
        id
        name
        content
        price
        variations(first: 30) {
          nodes {
            image {
              sourceUrl
            }
            name
          }
        }
        productCategories {
          nodes {
            name
          }
        }
        attributes {
          nodes {
            options
          }
        }
      }
    }
  }
}
  `

  try {
    const products: any = await graphQLClient.request(ProductsByOfertQuery)
    return products.products.nodes as WPProduct[]
  } catch (error) {
    console.error('Error fetching post:', error)
    throw new Error('Failed to fetch post data.')
  }
}
