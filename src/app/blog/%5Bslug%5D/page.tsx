import { client } from "../../../../sanity/lib/client";
import { postBySlugQuery, postsQuery } from "../../../../sanity/lib/queries";
import BlogDetails from "@/main-component/BlogDetails/BlogDetails";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { urlForImage } from "../../../../sanity/lib/image";

export const revalidate = 60;

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await client.fetch(postBySlugQuery, { slug: params.slug });
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.seo?.metaTitle || post.title} | Araizona`,
        description: post.seo?.metaDescription || post.excerpt,
        keywords: post.seo?.keywords?.join(", "),
        openGraph: {
            images: post.mainImage ? [urlForImage(post.mainImage).url()] : [],
        },
    };
}

export async function generateStaticParams() {
    const posts = await client.fetch(postsQuery);
    return posts.map((post: any) => ({
        slug: post.slug,
    }));
}

export default async function Page({ params }: Props) {
    const post = await client.fetch(postBySlugQuery, { slug: params.slug });

    if (!post) {
        notFound();
    }

    return <BlogDetails post={post} />;
}
