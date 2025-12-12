import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams(); // dynamic param
  return <h3>Blog Post ID: {postId}</h3>;
}
