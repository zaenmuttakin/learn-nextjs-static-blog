export default function PostPage({ params }) {
  const slug = params.slug;
  return (
    <div className="min-w-full tems-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="grid grid-cols-1 gap-4">{slug}</div>
    </div>
  );
}
