import { useRouter } from "next/router";
import { useEffect } from "react";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      try {
        const response = await fetch("http://localhost:3000/admin/signout", {
          method: "GET",
          //   credentials: 'include', // send cookies along with the request
        });

        if (response.ok) {
          router.push("/signin"); // redirect to login page
        } else {
          console.error("Failed to log out");
        }
      } catch (error) {
        console.error("Failed to log out", error);
      }
    };

    logout();
  }, [router]);
};

export default Logout;
