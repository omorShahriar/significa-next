import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const spinner = cva(
  `
    relative

    animate-spin

    before:absolute
    before:left-0
    before:top-0
    before:block
    before:h-full
    before:w-full
    before:rounded-full
    before:border-current
    before:opacity-20
    
    after:left-0
    after:top-0
    after:block
    after:h-full
    after:w-full
    after:rounded-full
    after:border-transparent
    after:border-t-current
    `,
  {
    variants: {
      size: {
        xs: `
            w-4
            h-4
            before:border-2
            after:border-2
          `,
        sm: `
            w-5
            h-5
            before:border-[3px]
            after:border-[3px]
          `,
        md: `
            w-6
            h-6
            before:border-[3px]
            after:border-[3px]
          `,
        lg: `
            w-8
            h-8
            before:border-4
            after:border-4
          `,
      },
    },
  }
);

const Spinner = ({
  className,
  size = "sm",
  ...props
}: {
  className: string;
  size?: "xs" | "sm" | "md" | "lg" | null | undefined;
}) => {
  return (
    <div
      aria-label="loading"
      role="progressbar"
      className={twMerge(spinner({ size }), className)}
      {...props}
    />
  );
};

export default Spinner;
