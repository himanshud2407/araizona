import { groq } from 'next-sanity'

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "currentSlug": slug.current,
  mainImage,
  publishedAt,
  excerpt,
  author->{
    name,
    image
  },
  categories[]->{
    title
  }
}`

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "currentSlug": slug.current,
  mainImage,
  body,
  publishedAt,
  author->{
    name,
    image,
    bio
  },
  categories[]->{
    title
  }
}`
