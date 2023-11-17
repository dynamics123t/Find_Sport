import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Footer from "../Footer/footer";
import Header from "../Headder/header";
import HeaderAuth from "../Headder/headerAuth";
import { toast } from "react-hot-toast";
import { RootState } from "@/redux/store";
import { useLayoutEffect } from "react";
import { getCookie } from "@/utils/clientCookie";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/settings/constants";
import { getRequest } from "@/services/base/getRequest";
import { updateUser } from "@/redux/user/userSlice";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
export default function Layout({ children }: any) {
  const pathname = usePathname();
  const router = useRouter();
  const { currentUser } = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    (async () => {
      if (!getCookie(ACCESS_TOKEN) && !getCookie(REFRESH_TOKEN)) {
      } else {
        if (!currentUser.id) {
          await getMe();
        } else if (currentUser.system_role === "ADMIN") {
          if (!pathname.startsWith("/admin")) router.push("/admin/dashboard");
        }
      }
    })();
  }, [pathname, currentUser]);

  const getMe = async () => {
    try {
      const data: any = await getRequest("/user/me");
      dispatch(updateUser({ ...data.data }));
    } catch (error: any) {
      // toast.error("System error");
    }
  };

  return (
    <>
      {currentUser.id ? <HeaderAuth /> : <Header />}
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
