import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const sanityClientRead = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true
})

export const sanityClientWrite = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_TOKEN,
  useCdn: true
})
