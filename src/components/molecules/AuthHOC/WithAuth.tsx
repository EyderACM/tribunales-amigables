import useUserAuth from "hooks/useUserAuth/useUserAuth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const WithAuth = (component, toRoute = "/") => {
  const [userToken] = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!userToken || userToken === "") router.push(toRoute);
  }, []);

  return component;
};

export default WithAuth;
