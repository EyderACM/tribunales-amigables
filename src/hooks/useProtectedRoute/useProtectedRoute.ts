import { useEffect } from "react";
import { useRouter } from 'next/router'
import useUserAuth from "hooks/useUserAuth/useUserAuth";
import useToast from "hooks/useToast/useToast";

const useProtectedRoute = () => {
  const router = useRouter();
  const [userToken] = useUserAuth();
  const { callAlertToast } = useToast();

  useEffect(() => {
    if (!userToken) {
      router.push("/");
      callAlertToast("Necesitas iniciar sesión para acceder a esta página");
    }
  })
}

export default useProtectedRoute;