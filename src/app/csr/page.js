"use client";
import { useEffect, useState } from "react";

export default function ClientSideRendering() {
  const [data, setData] = useState();

  async function fetchData() {
    const data = await fetch(
      "https://65c4bd99dae2304e92e33b23.mockapi.io/tasksData"
    );
    const res = await data.json();
    setData(res);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Client Side Rendering</h1>
      {data?.map((item) => {
        return <div key={item?.id}>{item?.name}</div>;
      })}
    </div>
  );
}
