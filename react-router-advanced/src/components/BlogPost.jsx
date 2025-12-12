import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams(); // renamed to match route
  return <h3>Blog Post ID: {id}</h3>;
}
