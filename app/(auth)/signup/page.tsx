import AuthLayout from "@/components/auth/AuthLayout";
import SignupForm from "@/components/auth/SignupForm";
import LoginIllustration from "@/components/auth/LoginIllustration";

export const metadata = {
  title: "Sign Up | AeroResQ",
  description: "Create your AeroResQ account",
};

export default function SignupPage() {
  return (
    <AuthLayout>
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <LoginIllustration />
        <SignupForm />
      </div>
    </AuthLayout>
  );
}