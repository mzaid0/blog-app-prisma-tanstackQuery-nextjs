import PostCard from "@/components/Post-Card";
import db from "../lib/db";
export const dynamic = "force-dynamic";

const getPosts = async () => {
  const response = await db.post.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      tag: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return response;
};

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {posts.map((post) => (
        <PostCard key={post.id} posts={post} />
      ))}
    </div>
  );
}