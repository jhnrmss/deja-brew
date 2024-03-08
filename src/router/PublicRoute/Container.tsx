// import { useAtomValue } from 'jotai'
// import { authAtom } from 'store/authAtom'

import { PublicLayout } from "@/components";

const Container = () => {
  // const auth = useAtomValue(authAtom)

  // if (auth.accessToken) {
  //     return <Navigate to='/order' />
  // }

  return <PublicLayout />;
};

export default Container;
