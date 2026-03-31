import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './sanity/schemas'
import { projectId, dataset } from './sanity/env'

export default defineConfig({
    basePath: '/studio',
    name: 'Araizona_Studio',
    title: 'Araizona SimpleSphere Studio',

    projectId,
    dataset,

    plugins: [deskTool()],

    schema: {
        types: schemaTypes,
    },
})
