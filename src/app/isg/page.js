export default async function IncrementalSideGeneration() {
  const tasks = await getTasks();
  return (
    <div>
      <h1>Incremental Side Rendering</h1>
      {tasks?.map((item) => {
        return <div key={item?.id}>{item?.name}</div>;
      })}
    </div>
  );
}

// In the app directory, data fetching with fetch()
// can use revalidate, which will cache the request
// for the specified amount of seconds.

async function getTasks() {
  const data = await fetch(
    "https://65c4bd99dae2304e92e33b23.mockapi.io/tasksData",
    { next: { revalidate: 60 } }
  );
  const res = await data.json();
  return res;
}
