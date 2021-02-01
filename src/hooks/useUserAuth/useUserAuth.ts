import useLocalStorage from "hooks/useLocalStorage/useLocalStorage";

function useUserAuth() {
  const [storedToken, setStoredToken] = useLocalStorage("auth", undefined);

  const userToken = () => {
    return storedToken;
  };

  const setUserToken = ({ token }) => {
    setStoredToken(token);
  };

  return [userToken, setUserToken];
}

export default useUserAuth;
