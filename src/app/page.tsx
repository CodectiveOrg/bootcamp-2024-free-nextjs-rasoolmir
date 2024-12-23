type Post = {
  id: number;
  title: string;
};

export default async function Home() {
  const res: Response = await fetch("https://jsonplaceholder.org/posts", {
    cache: "no-store",
  });

  const posts: Post[] = await res.json();

  return (
    <main>
      <h1>!سلام، رفیق</h1>
      <p>لورم</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
