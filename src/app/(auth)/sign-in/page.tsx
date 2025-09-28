import AuthForm from "@/src/components/AuthForm";
import {signIn} from "@/src/lib/auth/actions";

export default function Page() {
  return <AuthForm mode="sign-in" onSubmit={signIn} />;
}