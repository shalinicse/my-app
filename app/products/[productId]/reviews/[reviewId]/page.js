import { notFound } from "next/navigation";

export default function ProductReviewPage({ params }) {
  if (parseInt(params?.reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      Review for {params.productId} Product , review {params.reviewId}
    </div>
  );
}
