export default function ComplexDashboardLayout({
  children,
  analytics,
  revenue,
  notifications,
}) {
  return (
    <div>
      {/* parallel routes benefit */}
      <h1>Complex Dashboard Layout</h1>
      {children}
      <div style={{ display: "flex" }}>
        {/* instead of calling components we can call parallel routes by pass params in layout */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{analytics}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  );
}
