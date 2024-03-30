'use client'
import useAuth from "@/authentication/useAuth";
import createJWT from "@/utils/createJWT";
import toast from "react-hot-toast";
import { GrGoogle } from "react-icons/gr";
import { useRouter, useSearchParams } from "next/navigation";

const GoogleLogin = () => {

    const { googleLogin } = useAuth();
    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const { replace, refresh } = useRouter();

    const handleGoogleLogin = async () => {
        
        try {
          const { user } = await googleLogin();
          await createJWT({ email: user.email });
            toast.success("User signed in successfully");
            replace(from);
        } catch (error) {
          
          toast.error(error.message || "User not signed in");
        }
      };

    return (
        <section>
            <button onClick={handleGoogleLogin}  className='button w-full flex justify-center items-center gap-3'>
                <GrGoogle />
                <p>Login With Google</p>
            </button>
        </section>
    );
};

export default GoogleLogin;