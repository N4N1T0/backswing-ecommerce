import { type WPPosts, type WPPost } from '@/types'
import { request, gql, GraphQLClient } from 'graphql-request'

const graphqlUrl = process.env.WP_GRAPHQL_URL
const graphqlToken = process.env.WORDPRESS_AUTH_REFRESH_TOKEN
const graphQLClient = new GraphQLClient(graphqlUrl!, {
  headers: {
    Authorization: `Bearer ${graphqlToken}`
  }
})

export const getAllPosts = async () => {
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
  const allPosts: WPPosts = await request(graphqlUrl!, query)
  return allPosts.posts.nodes
} catch (error) {
  console.error('Error fetching post:', error)
    throw new Error('Failed to fetch post data.')
}
}

export const getPostById = async (id: string) => {
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

export const getRelatedPost = async (id: string) => {
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

export const createCostumer = async (email: string | null | undefined, username: string | null | undefined) => {
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
      return user
    } catch (error) {
      console.error('Error fetching post:', error)
      throw new Error('Failed to fetch post data.')
    }
  }

  return existingCostumer
}

export const getCostumerByEmail = async (email: string | null | undefined) => {
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
    return user.customers.nodes
  } catch (error) {
    console.error('Error fetching post:', error)
    throw new Error('Failed to fetch post data.')
  }
}
