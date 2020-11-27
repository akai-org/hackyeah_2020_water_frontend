import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
const useAuth = () => {
  const router = useRouter();
  console.log(router)
  const [cookies, setCookie, removeCookie] = useCookies();
  console.log('sdsd')
  if (cookies.accessToken) {
        router.push('/profile')
  }else{
      router.push('/')
  }
};
export { useAuth };
