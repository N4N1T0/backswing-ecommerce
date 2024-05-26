import type { WPPost, WPProduct, User, Costumer } from '@/types'
import { gql, GraphQLClient } from 'graphql-request'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
export const graphqlUrl = process.env.WP_GRAPHQL_URL!
export const graphqlToken = process.env.WORDPRESS_AUTH_REFRESH_TOKEN
export const graphQLClient = new GraphQLClient(graphqlUrl, {
	headers: {
		Authorization: `Bearer ${graphqlToken}`,
	},
})

/**
 * Retrieves all posts from the GraphQL API.
 *
 * @return {Promise<Array<WPPost>>} An array of WPPost objects representing all the posts.
 * @throws {Error} If there is an error fetching the post data.
 */
export const getAllPosts = async (): Promise<WPPost[]> => {
	const getAllPostsQuery = gql`
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
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const allPosts: any = await graphQLClient.request(getAllPostsQuery)
		return allPosts.posts.nodes as WPPost[]
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
export const getPostById = async (id: string): Promise<WPPost> => {
	const decodedId = decodeURIComponent(id)

	const getPostByIdQuery = gql`
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
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const post: any = await graphQLClient.request(getPostByIdQuery, variables)
		return post.post as WPPost
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
	const getRelatedPostQuery = gql`
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
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const posts: any = await graphQLClient.request(
			getRelatedPostQuery,
			variables,
		)
		return posts.posts.nodes as WPPost[]
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
export const createCostumer = async (
	email: string | null | undefined,
	username: string | null | undefined,
): Promise<Costumer> => {
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
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			const user: any = await graphQLClient.request(
				createCostumerQuery,
				variables,
			)
			return user.nodes[0] as Costumer
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
export const getCostumerByEmail = async (
	email: string | null | undefined,
): Promise<User['nodes']> => {
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
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const user: any = await graphQLClient.request(
			CostumerByEMailQuery,
			variables,
		)
		return user.customers.nodes as User['nodes']
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
export const getProductsByCategories = async (
	categories: string | string[],
	gender: string,
): Promise<WPProduct[]> => {
	const ProductsByCategoriesQuery = gql`
    query MyQuery($categoryIn: [String], $gender: String) {
    products(where: {categoryIn: $categoryIn, tagIn: "model-d", category: $gender } first: 20) {
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
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const products: any = await graphQLClient.request(
			ProductsByCategoriesQuery,
			variables,
		)
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
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const product: any = await graphQLClient.request(ProductByIdQuery, variable)
		return product.product as WPProduct
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
export const getProductsByFeatured = async (
	categories = 'camisetas',
): Promise<WPProduct[]> => {
	const ProductsByFeaturedQuery = gql`
  query MyQuery($categoryIn: [String]) {
  products(where: {featured: true, categoryIn: $categoryIn} first: 20) {
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
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const products: any = await graphQLClient.request(
			ProductsByFeaturedQuery,
			variables,
		)
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
  products(where: {onSale: true} first: 20) {
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
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const products: any = await graphQLClient.request(ProductsByOfertQuery)
		return products.products.nodes as WPProduct[]
	} catch (error) {
		console.error('Error fetching post:', error)
		throw new Error('Failed to fetch post data.')
	}
}

/**
 * Retrieves a list of product IDs along with their categories.
 *
 * @return {Promise<WPProduct[]>} A promise that resolves to an array of WPProduct objects containing the product IDs.
 */
export const getProductsIds = async (): Promise<WPProduct[]> => {
	const ProductsIdsQuery = gql`
    query MyQuery {
    products(first: 200) {
      nodes {
        id
        ... on VariableProduct {
          id
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

	try {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const products: any = await graphQLClient.request(ProductsIdsQuery)
		return products.products.nodes as WPProduct[]
	} catch (error) {
		console.error('Error fetching post:', error)
		throw new Error('Failed to fetch post data.')
	}
}
