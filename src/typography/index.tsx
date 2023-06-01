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
  return <p className={`${className} text-sm text md:text-base`}>{children}</p>;
}

export function TextBigger({ children, className }: TypographyProps) {
  return <p className={`${className} text-base text md:text-lg`}>{children}</p>;
}

export function Heading({ children, className }: TypographyProps) {
  return (
    <h1 className={`${className} text-xl font-bold text-[#4aacc5] md:text-3xl`}>
      {children}
    </h1>
  );
}

export function SubHeading({ children, className }: TypographyProps) {
  return (
    <h3
      className={`${className} text-lg font-semibold text-[#4aafda] md:text-2xl`}
    >
      {children}
    </h3>
  );
}

export function HyperLink({ children, className, herf, target }: HyperLink) {
  return (
    <Link
      className={`${className} inline text-sm text md:text-base font-semibold hover:underline hover:text-[#0019ff] transition-all cursor-pointer active:text-[#0019ff]`}
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
      className={`${className} w-80 h-2 my-4 bg-[#f1f1f1] border-0 rounded `}
    />
  );
}
