import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/router";

type PrivateRouteProps = {
  children: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuth = useSelector(
    (state: RootState) => state.authReducer.value.isAuth
  );
  const router = useRouter();

  // Redirect to login page if the user is not logged in
  React.useEffect(() => {
    if (!isAuth) {
      router.push("/login");
    }
  }, [isAuth]);

  return <>{children}</>;
};

export default PrivateRoute;
