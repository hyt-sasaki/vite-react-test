import { useMe } from "../api/getMe";

export const Requester = () => {
  const { data, isLoading, isError, error } = useMe();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    // eslint-disable-next-line no-console
    console.log(error);
    return <div>Error...</div>;
  }
  if (!data) {
    return <div>invalid</div>;
  }

  return (
    <div>
      <h1>Request test</h1>
      <span>
        Name: {data.name} (id: {data.id})
      </span>
    </div>
  );
};
