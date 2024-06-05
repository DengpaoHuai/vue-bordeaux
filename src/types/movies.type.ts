import { z } from 'zod'

export const movieSchema = z.object({
  _id: z.string(),
  title: z.string().min(3),
  director: z.string().min(3),
  description: z.string().min(15)
})

export type Movie = z.infer<typeof movieSchema>
