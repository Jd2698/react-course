import { Navigate, NavLink, Route, Routes } from "react-router";
import { CounterContext, ProviderContext } from "../context/useContext";
import { useContext } from "react";

export const RoutesComponent = () => {
  return (
    <>
      <ProviderContext>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "btn btn-success" : "btn")}
          >
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "btn btn-success" : "btn")}
          >
            Dash
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </ProviderContext>
    </>
  );
};

const Home = () => {
  const { data, addNumber } = useContext(CounterContext);

  return (
    <>
      <h1>This is home: {data.join(", ")}</h1>
      <button onClick={addNumber}>Add</button>
    </>
  );
};

const Dashboard = () => {
  const { data } = useContext(CounterContext);
  return <h1>This is the dashboard: {data.join(", ")}</h1>;
};
