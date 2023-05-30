import Link from "next/link";
import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

interface HTMLTags {
  className?: string;
}

interface HyperLink {
  children: ReactNode;
  herf: any;
  className?: string;
  target?: string;
}

export function Text({ children, className }: TypographyProps) {
  return <p className={className}>{children}</p>;
}

export function Heading({ children, className }: TypographyProps) {
  return (
    <h1 className={`${className} text-3xl font-bold text-[#4aacc5]`}>
      {children}
    </h1>
  );
}

export function SubHeading({ children, className }: TypographyProps) {
  return (
    <h3 className={`${className} text-2xl font-semibold text-[#4aafda]`}>
      {children}
    </h3>
  );
}

export function HyperLink({ children, className, herf, target }: HyperLink) {
  return (
    <Link
      className={`${className} inline text-sm font-semibold hover:underline hover:text-[#0019ff] transition-all cursor-pointer active:text-[#0019ff]`}
      href={herf || "#"}
      target={target || ""}
    >
      {children}
    </Link>
  );
}

export function Divider({ className }: HTMLTags) {
  return (
    <hr
      className={`${className} w-80 h-1 my-4 bg-[#f1f1f1] border-0 rounded `}
    />
  );
}
