import { useGetData } from "../hooks/useGetData";

export const UserDetail = () => {
  const { data: user, loading } = useGetData("https://dummyjson.com/users/1");

  return (
    <section className="container">
      {loading && <p className="text-center">...loading</p>}
      {!loading && (
        <div className="row justify-content-center">
          <section className="col-sm-4">
            <article className="card">
              <img
                className="card-img-top"
                src={user.image}
                alt={user.username}
              />
              <div className="card-body">
                <p>{user.username}</p>
                <p>
                  {user.firstName} {user.lastName}
                </p>
              </div>
            </article>
          </section>
        </div>
      )}
    </section>
  );
};