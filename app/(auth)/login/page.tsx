import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
import LoginIllustration from "@/components/auth/LoginIllustration";

export const metadata = {
  title: "Login | AeroResQ",
  description: "Secure login to AeroResQ Dashboard",
};

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Left Side */}
        <LoginIllustration />

        {/* Right Side */}
        <LoginForm />
      </div>
    </AuthLayout>
  );
}