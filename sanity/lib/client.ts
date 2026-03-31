import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
    // These settings facilitate architecture where fetching data, 
    // sessions, and auth are separate concerns
    stega: {
        enabled: false,
        studioUrl: '/studio',
    },
})
