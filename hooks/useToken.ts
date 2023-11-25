import _ from "lodash";
import { useState } from "react";
// Todo
const TOKEN_STORAGE_KEY = "token_storage_key";

export default function useToken() {
  const [token, setToken] = useState<string | undefined>(undefined);
  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  const isTokenExist = _.isEmpty(token);

  return {
    token,
    isTokenExist,

    isAuthenticated: true,
    accessToken,
    // getTokenStorage,
    setTokenStorage: setToken,
    // clearToken,
  };
}

export type UseTokenType = ReturnType<typeof useToken>;

// async function getTokenStorage() {
//   try {
//     const token = await AsyncStorage.getItem(TOKEN_STORAGE_KEY);
//     if (token) {
//       return JSON.parse(token);
//     }
//     return undefined;
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// async function clearToken() {
//   try {
//     await AsyncStorage.removeItem(TOKEN_STORAGE_KEY);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// async function setTokenStorage(token: string) {
//   try {
//     await AsyncStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(token));
//   } catch (error) {
//     console.log(error.message);
//   }
// }
