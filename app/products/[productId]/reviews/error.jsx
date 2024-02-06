"use client";
export default function ErrorBoundary({ error }) {
  return (
    <div style={{ color: "red" }}>
      Error in Review Page
      <h6 style={{ color: "green" }}>{error?.message}</h6>
    </div>
  );
}
