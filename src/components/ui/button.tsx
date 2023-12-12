import { cva } from "class-variance-authority";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import Spinner from "./spinner";

const button = cva(
  `
    group
    relative

    inline-flex
    items-center
    justify-center
    gap-1.5

    overflow-hidden
    whitespace-nowrap
   
    text-md
    font-medium
    leading-none

    outline-none

    transition-all

    hover:ring-4
    focus-visible:ring-4

    active:scale-[0.98]
    active:ring-2

    disabled:pointer-events-none
    disabled:opacity-60
    `,
  {
    variants: {
      variant: {
        primary: `
            bg-foreground
            text-background
          `,
        secondary: `
            text-white
            border-border
            hover:border-border-active
            focus-visible:border-border-active
            active:border-border-active
            border
          `,
        ghost: "",
      },
      size: {
        sm: `
            h-9
            rounded-sm
            px-3
          `,
        md: `
            h-11
            rounded-md
            px-5
          `,
        lg: `
            h-14
            rounded-lg
            px-6
          `,
      },
      loading: {
        true: `[&>*:not(.btn-spinner)]:opacity-0`,
      },
    },
  }
);

import React from "react";

interface ButtonProps {
  disabled?: boolean;
  as?: React.ElementType;
  variant?: "primary" | "secondary" | "ghost" | null | undefined;
  size?: "sm" | "md" | "lg" | null | undefined;
  loading?: boolean;
  icon?: React.ReactNode;
  arrow?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  as = "button",
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  arrow,
  children,
  className,
  ...props
}) => {
  const Element = as;
  return (
    <Element
      role="button"
      tabIndex={0}
      disabled={disabled}
      className={twMerge(button({ variant, size, loading }), className)}
      {...props}
    >
      {children && (
        <span
          className={clsx(
            icon &&
              arrow && [
                "transition-all",
                "duration-300",
                "ease-motion",
                size === "md" && "group-hover:-translate-x-5",
                "group-focus-visible:-translate-x-5",
                size === "lg" && "group-hover:-translate-x-6",
                "group-focus-visible:-translate-x-6",
              ]
          )}
        >
          {children}
        </span>
      )}
      {arrow && (
        <svg
          className={clsx(
            icon &&
              arrow && [
                "absolute",
                "translate-x-10",
                "transition-all",
                "duration-300",
                "ease-motion",
                "group-hover:-translate-x-0",
                "group-focus-visible:-translate-x-0",
                size === "md" && "right-5",
                size === "lg" && "right-6",
              ]
          )}
          width="16"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 8.5h9M8.5 4.5l3.5 4-3.5 4"
            stroke="currentColor"
            stroke-width="1.2"
          />
          <path
            d="m2.8 8.1 1.9.1 2 .2h5.2M12 8.4c0-.6-.6-.9-1-1.2l-.6-.3-.3-.3-.4-.2-.6-.6-.4-.6-.3-.8M12 8.4c0 .7-.6 1.2-1 1.7l-1.2 1.4-.9.6-.5.5"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
          />
        </svg>
      )}
    </Element>
  );
};

export default Button;
