import { Link } from "react-router-dom";
import { getPosts } from "../api/post";
import { useAsync } from "../hooks/useAsync";

export function PostList() {
  const { loading, error, value: posts } = useAsync(getPosts);

  if (loading) <><h1>Loading</h1></>;
  if (error) <h1 className="error-msg">{error}</h1>;

  return posts?.map((post) => {
    return (
      <h1 key={post.id}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h1>
    );
  });
}
