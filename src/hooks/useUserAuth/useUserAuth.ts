import useLocalStorage from "hooks/useLocalStorage/useLocalStorage";

function useUserAuth() {
  const [storedToken, setStoredToken] = useLocalStorage("auth", undefined);
  const userToken = storedToken;

  const setUserToken = ({ token }: { token: string }) => {
    setStoredToken(token);
  };

  return [userToken, setUserToken];
}

export default useUserAuth;
