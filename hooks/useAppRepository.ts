import useToken from "./useToken";

export default function useAppRepository() {
  const { isAuthenticated } = useToken();
  // Todo 검증 필요
  return { isAuthenticated };
}
