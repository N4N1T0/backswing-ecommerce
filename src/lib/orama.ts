// Orama Imports
import { OramaClient } from '@oramacloud/client'

// Orama Variables
const endpoint = process.env.ORAMA_API_ENDPOINT || ''
const apiKey = process.env.ORAMA_API_KEY || ''

// Orama Client
export const orama = new OramaClient({
	endpoint: 'https://cloud.orama.run/v1/indexes/backswing-products-f9m76l',
	api_key: 'EdX84dEdShgqz5oRkG5vkc0ph2uEpsBL',
})
