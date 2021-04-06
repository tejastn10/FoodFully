import { useEffect, useState } from "react";
import { Auth } from "../store/@types";
import { getFromLocalStorage } from "../utils/api-helper";

export default () => {
  const [user, setUser] = useState<null | Auth>(null);

  const authState = async () => {
    try {
      const user = await getFromLocalStorage("user");
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    authState();
  }, []);

  return { user };
};
