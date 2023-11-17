import { Routes, Route, useNavigate, Outlet, Navigate } from "react-router-dom";
import Register from "./pages/register";
import Loggin from "./pages/login";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API, setAuthToken } from "./libs/Api";
import { AUTH_CHECK, AUTH_ERROR } from "./stores/rootReducer";
import Dashboard from "./pages/dasboard";
import { RootState } from "./stores/rootState";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);

  async function authCheck() {
    try {
      setAuthToken(localStorage.token);
      const response = await API.get("/auth/check");
      dispatch(AUTH_CHECK(response.data));
      setIsLoading(false);
    } catch (err) {
      dispatch(AUTH_ERROR());

      setIsLoading(false);
      navigate("/login");
      console.log("auth error:", err);
    }
  }

  function UserLogedIn() {
    if (!auth.username) {
      return <Navigate to={"/login"} />;
    } else {
      return <Outlet />;
    }
  }

  function UserNotLogin() {
    if (auth.username) {
      return <Navigate to={"/"} />;
    } else {
      return <Outlet />;
    }
  }

  useEffect(() => {
    if (localStorage.token) {
      authCheck();
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? null : (
        <Routes>
          {/* Route when user not login or have no token */}
          <Route path="/" element={<UserLogedIn />}>
            <Route path="/" element={<Dashboard />}></Route>
          </Route>

          {/* Routes when user already login or have token */}
          <Route path="/" element={<UserNotLogin />}>
            <Route path="login" element={<Loggin />}></Route>
            <Route path="register" element={<Register />}></Route>
          </Route>
        </Routes>
      )}
    </>
  )

}

export default App;
