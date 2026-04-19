import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '*.md'
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        badge: z.string().optional(),
        image: z.string().optional(),
        authors: z.array(z.object({
          name: z.string(),
          description: z.string().optional(),
          avatar: z.object({
            src: z.string()
          }).optional()
        })).optional()
      })
    })
  }
})
