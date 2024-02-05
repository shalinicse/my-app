// we can get api metadata here for seo uses
export const metadata = ({ params }) => {
  return {
    title: `product`,
    description: `Details about Product ${params?.productId}`,
  };
};

export default function ProductDetailsPage({ params }) {
  return <div>Details about Product {params.productId}</div>;
}
