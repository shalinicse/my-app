export default async function StaticSideGeneration() {
  const tasks = await getTasks();
  return (
    <div>
      <h1>Server Side Rendering</h1>
      {tasks?.map((item) => {
        return <div key={item?.id}>{item?.name}</div>;
      })}
    </div>
  );
}

// data fetching with fetch() will default to cache: 'force-cache',
//  which will cache the request data until manually invalidated.
//  This is similar to getStaticProps in the pages directory.

async function getTasks() {
  const data = await fetch(
    "https://65c4bd99dae2304e92e33b23.mockapi.io/tasksData",
    { cache: "no-cache" }
  );
  const res = await data.json();
  return res;
}
