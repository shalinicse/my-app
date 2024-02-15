import { notFound } from "next/navigation";

export default function ProductReviewPage({ params }) {
  if (parseInt(params?.reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      {/* {dfghj}  just to check an error of undefined and handling it bu error.js */}
      Review for {params.productId} Product , review {params.reviewId}
    </div>
  );
}
