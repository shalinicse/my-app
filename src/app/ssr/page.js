export default async function ServerSideRendering() {
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

// append that server side prop function after the actual react function


// By setting the cache option to no-store,
//  we can indicate that the fetched data should never be cached.
//  This is similar to getServerSideProps in the pages directory.

async function getTasks() {
  const data = await fetch(
    "https://65c4bd99dae2304e92e33b23.mockapi.io/tasksData"
  );
  const res = await data.json();
  return res;
}
