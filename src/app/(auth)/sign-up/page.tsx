import AuthForm from "@/src/components/AuthForm";
import {signUp} from "@/src/lib/auth/actions";

export default function Page() {
  return <AuthForm mode="sign-up" onSubmit={signUp} />;
}