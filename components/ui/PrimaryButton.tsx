import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type PrimaryButtonProps = ButtonProps | LinkProps;

export const PrimaryButton = (props: PrimaryButtonProps) => {
  const commonClass = "your-button-styles"; // Replace with your base CSS classes

  if ("href" in props && props.href) {
    const { href, children, className, ...rest } = props;
    return (
      <Link
        href={href}
        className={`${commonClass} ${className ?? ""}`}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  const { children, className, type = "button", ...rest } = props as ButtonProps;
  return (
    <button
      type={type}
      className={`${commonClass} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};