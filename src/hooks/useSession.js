import { useEffect } from "react";

export default function useSession(getUser, setLoad) {
  useEffect(async () => {
    const session = localStorage.getItem('session');
    if (session) {
      await getUser(session);
    }
    await setLoad(false);
  }, [])
}