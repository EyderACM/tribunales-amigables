import { useEffect } from "react";
import { useRouter } from "next/router";
import useUserAuth from "hooks/useUserAuth/useUserAuth";

const WithAuth = ({component, toRoute = "/"}) => {
  const [userToken] = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!userToken) router.push(toRoute);
  }, []);

  return component;
};

export default WithAuth;
