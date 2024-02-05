import Link from "next/link";

export default function ProductList() {
  const productId = 100;
  return (
    <div>
      <Link href="/">Home</Link>

      <h1>Product List</h1>
      <ul>
        <li>
          <h3>
            <Link href="./products/1">Product 1</Link>
          </h3>
          <h3>
            <Link href="./products/2">Product 2</Link>
          </h3>
          <h3>
            <Link href="./products/3">Product 3</Link>
          </h3>
          <h3>
            <Link href={`./products/${productId}`}>Product 100</Link>
          </h3>
        </li>
      </ul>
    </div>
  );
}
