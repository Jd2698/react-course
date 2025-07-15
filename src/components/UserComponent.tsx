import { useFetchUser } from "../hooks/useFetchUser";

export const UserComponent = () => {
  const { data, errors, isLoading } = useFetchUser(
    "https://jsonplaceholder.typicode.com/usersa"
  );

  return (
    <>
      {isLoading ? (
        <h1>loading data</h1>
      ) : errors ? (
        <p>{errors.toString()}</p>
      ) : (
        data && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => {
                return (
                  <tr key={d.id}>
                    <th scope="row">{d.id}</th>
                    <td>{d.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )
      )}
    </>
  );
};
