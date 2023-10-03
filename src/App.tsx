import { useEffect, useState } from "react";
import { Layout } from "./components/layout/Layout.tsx";
import "./App.scss";

export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2350);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          {/* <PropagateLoader color="black" loading={loading} size={13} /> */}
          <img src="../luckylogo.png" alt="" />
          {/* <h3>Lucky</h3> */}
        </div>
      ) : (
        <Layout />
      )}
    </>
  );
};
