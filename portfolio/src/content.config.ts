import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({
    titre: z.string(),
    tagline: z.string(),
    featured: z.boolean().default(false),
    ordre: z.number(),
    stack: z.array(z.string()),
    lienGithub: z.string().url().optional(),
    image: z.string().optional(),
    contexteGroupe: z.boolean().default(false),
    metriques: z
      .array(
        z.object({
          label: z.string(),
          valeur: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { projets };
