import { cva } from "class-variance-authority";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
const tag = cva(
  `
    border
    border-border
    rounded-full

    inline-flex
    items-center
    justify-center

    outline-none
    whitespace-nowrap

    py-2
    px-3
    
    font-sans
    text-sm
    font-medium
    leading-none
    `,
  {
    variants: {
      active: {
        true: `
          bg-foreground-tertiary/20
          `,
      },
      interactable: {
        true: `
            cursor-pointer

            transition-all

            hover:bg-foreground-tertiary/10

            focus-visible:border-border-active
            focus-visible:ring-2
            
            active:text-foreground-secondary
          `,
      },
    },
  }
);

const Tag = ({
  href,
  active,
  label,
  className,
  ...props
}: {
  href: string;
  active?: boolean;
  label: string;
  className?: string;
}) => {
  const Element = href ? Link : typeof active === "boolean" ? "button" : "span";
  const interactable = !!href || typeof active === "boolean";

  return (
    <Element
      role="button"
      tabIndex={0}
      href={href}
      className={twMerge(
        tag({ interactable: !!href || typeof active === "boolean", active }),
        className
      )}
      {...props}
    >
      <span>{label}</span>
      {href && <ChevronRightIcon className="ml-2 text-foreground-tertiary" />}
    </Element>
  );
};

export default Tag;
