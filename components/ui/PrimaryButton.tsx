"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

type Props =
  | ({
      href: string;
      children: React.ReactNode;
      type?: never;
      onClick?: never;
    })
  | ({
      href?: never;
      children: React.ReactNode;
    } & ButtonHTMLAttributes<HTMLButtonElement>);

export default function PrimaryButton(props: Props) {
  const commonClass =
    "inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 transition hover:bg-orange-600";

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={commonClass}>
        {props.children}
        <ArrowRight size={18} />
      </Link>
    );
  }

  return (
    <button {...props} className={commonClass}>
      {props.children}
      <ArrowRight size={18} />
    </button>
  );
}