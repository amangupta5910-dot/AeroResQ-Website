"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = {
  href?: never;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Props = LinkProps | ButtonProps;

export default function PrimaryButton(props: Props) {
  const commonClass =
    "inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 transition hover:bg-orange-600";

  if ("href" in props && props.href) {
    const {
      href,
      children,
      target,
      rel,
      className,
      ...rest
    } = props;

    const isExternal =
      href.startsWith("http://") || href.startsWith("https://");

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={`${commonClass} ${className ?? ""}`}
          {...rest}
        >
          {children}
          <ArrowRight size={18} />
        </a>
      );
    }

    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={`${commonClass} ${className ?? ""}`}
      >
        {children}
        <ArrowRight size={18} />
      </Link>
    );
  }

  const {
  children,
  className,
  type = "button",
  ...rest
} = props;

return (
  <button
    type={type}
    {...rest}
    className={`${commonClass} ${className ?? ""}`}
  >
      {children}
      <ArrowRight size={18} />
    </button>
  );
}