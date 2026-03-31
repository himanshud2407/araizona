import { groq } from 'next-sanity'

export const postsQuery = groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  excerpt,
  "author": author->{name, image, role},
  "categories": categories[]->{title, slug, color}
}`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  excerpt,
  body,
  "author": author->{name, image, role, bio},
  "categories": categories[]->{title, slug, color},
  seo
}`

export const categoriesQuery = groq`*[_type == "category"] {
  _id,
  title,
  "slug": slug.current,
  description,
  "postCount": count(*[_type == "post" && references(^._id)])
}`

export const recentPostsQuery = groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  "author": author->name
}`
