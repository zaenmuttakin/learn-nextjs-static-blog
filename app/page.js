import fs from "fs";
import Link from "next/link";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((fileName) => fileName.replace(".md", ""));
  return slugs;
};

export default function Home() {
  const postMetaData = getPostMetadata();
  const postPreviews = postMetaData.map((slug) => (
    <Link key={slug} href={`/posts/${slug}`}>
      <div className="hover:underline">{slug}</div>
    </Link>
  ));
  return (
    <div className="items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <div className="grid grid-cols-1 gap-4 w-fit mx-auto">{postPreviews}</div>
    </div>
  );
}
