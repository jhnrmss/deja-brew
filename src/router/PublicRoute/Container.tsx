// import { useAtomValue } from 'jotai'
import { Navigate, Outlet } from "react-router";
// import { authAtom } from 'store/authAtom'

const Container = () => {
  // const auth = useAtomValue(authAtom)

  // if (auth.accessToken) {
  //     return <Navigate to='/order' />
  // }

  return <Outlet />;
};

export default Container;
