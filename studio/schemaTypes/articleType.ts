import { defineField, defineType } from 'sanity'
import { sections } from "../../shared";

export const articleType = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'section',
      type: 'string',
      options: {
        list: sections,
      },
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publicationName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publicationDate',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
    defineField({
      name: 'notes',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
