import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Blog = () => {
  const { posts } = useLoaderData();

  console.log(posts);

  return (
    <ul>
      {posts.length > 0 ? (
        posts.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
              {blog.id} - {blog.title}
            </Link>
          </li>
        ))
      ) : (
        <li>No hay posts encontrados</li>
      )}
    </ul>
  );
};
export default Blog;

export const loaderBlog = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok)
    throw {
      status: res.status,
      statusText: "No encontrado",
    };
  const posts = await response.json();

  return { posts };
};
