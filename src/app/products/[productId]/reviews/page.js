import { notFound } from "next/navigation";

export default function ProductReviewPage({ params }) {
  
  return <div>Reviews about Product {params.productId}</div>;
}
