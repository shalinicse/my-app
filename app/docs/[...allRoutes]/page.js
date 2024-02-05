export default function Docs({ params }) {
  if (params?.allRoutes?.length === 2) {
    return (
      <h1>
        Docs for feature {params?.allRoutes[0]} concept {params?.allRoutes[1]}
      </h1>
    );
  } else if (params?.allRoutes?.length === 1) {
    return <h1>Docs for feature {params?.allRoutes[1]}</h1>;
  } else if (params?.allRoutes?.length > 2) {
    return <h1>Docs for unlimited params</h1>;
  }
  return <h1>Docs home page</h1>;
}
