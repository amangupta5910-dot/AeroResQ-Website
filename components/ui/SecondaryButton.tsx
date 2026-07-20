import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function SecondaryButton({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center px-7 py-4 rounded-full border border-white/10 hover:border-orange-500 transition"
    >
      {children}
    </Link>
  );
}