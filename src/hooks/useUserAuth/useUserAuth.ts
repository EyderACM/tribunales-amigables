import useLocalStorage from "hooks/useLocalStorage/useLocalStorage";

interface IUseUserAuth {
  token: string | undefined;
  isAdmin: boolean;
}

function useUserAuth(): [IUseUserAuth, (data: IUseUserAuth) => void] {
  const [storedToken, setStoredToken] = useLocalStorage("auth", undefined);
  const [isAdmin, setIsAdmin] = useLocalStorage("isAdmin", false);
  const token = storedToken;

  const setUserToken = ({ token, isAdmin }: IUseUserAuth) => {
    setStoredToken(token);
    setIsAdmin(isAdmin);
  };

  return [{ token, isAdmin }, setUserToken];
}

export default useUserAuth;
