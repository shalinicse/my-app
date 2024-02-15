export default function Cards({ children }) {
  const style = {
    backgroundColor: "#ffffff",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "20px",
    margin: "10px",
  };
  return <div style={style}>{children}</div>;
}
