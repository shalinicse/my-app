export default function layout({ children }) {
  return (
    <div>
      <h1>Inner layout for login and register</h1>
      <p>it selectively applies on login and register only</p>
      {children}
    </div>
  );
}
