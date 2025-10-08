import { useParams } from "react-router-dom";

export default function Blog() {
  const { blogId } = useParams();
  return <>Blog ID: {blogId}</>
}