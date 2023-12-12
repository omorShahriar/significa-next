import { twMerge } from "tailwind-merge";
import Link from "next/link";
const UiLink = ({
  active,
  href,
  className = "",
  children,
  ...props
}: {
  active?: boolean;
  href: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      className={twMerge(
        `
        ulink 
    bg-gradient-to-r
    from-[var(--link-underline-color)]
    to-[var(--link-underline-color)]
    bg-[size:0_var(--link-underline-width)]
    bg-[100%_100%]
    bg-no-repeat
    outline-none
    transition-[background-size]
    delay-100
    duration-300
    ease-smooth
    hover:bg-[size:100%_var(--link-underline-width)]
    hover:bg-[0_100%]

    focus-visible:opacity-60
    `,
        active
          ? "pointer-events-none bg-[size:100%_var(--link-underline-width)] bg-[0_100%] text-foreground-secondary"
          : "",
        className
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

export default UiLink;
