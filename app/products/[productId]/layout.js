export const metadata = {
  title: "Product",
};

export default function ProductDetailsLayout({ children }) {
  return (
    <>
      <h1>Featured Layout inside product folder</h1>
      {children}
    </>
  );
}
