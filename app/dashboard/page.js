import LineChart from "./LineChart";

export default function page() {
  return (
    <div>
      <h1>Importing external component inside page component of dashboard</h1>
      <h7 style={{ color: "green" }}>
        <LineChart />
      </h7>
    </div>
  );
}
