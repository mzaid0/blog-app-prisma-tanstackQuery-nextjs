import PostCard from "@/components/Post-Card";

export default function Home() {
  return (
    <div className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </div>
  );
}
