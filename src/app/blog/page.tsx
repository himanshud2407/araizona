import { client } from "../../../sanity/lib/client";
import { postsQuery } from "../../../sanity/lib/queries";
import BlogPage from "@/main-component/BlogPage/BlogPage";

export const revalidate = 60; // ISR 60 seconds

export default async function Page() {
    const posts = await client.fetch(postsQuery);
    return <BlogPage posts={posts} />;
}
