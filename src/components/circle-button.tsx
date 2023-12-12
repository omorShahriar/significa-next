import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

const circleButton = cva(
  "[& > *]:pointer-events-none flex items-center justify-center rounded-full bg-foreground text-background outline-none transition-all hover:opacity-80 focus-visible:ring-4 active:scale-95",
  {
    variants: {
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
      },
    },
  }
);

const CircleButton = ({
  className,
  icon,
  ...props
}: {
  className: string;
  icon: string;
}) => {
  const size = "md";
  return (
    <button
      role="button"
      tabIndex={0}
      className={twMerge(circleButton({ size }), className)}
      {...props}
    >
      {icon == "arrow-right" && (
        <svg
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
      {icon == "arrow-left" && (
        <svg
          width="16"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 8.5H4M7.5 4.5 4 8.5l3.5 4"
            stroke="currentColor"
            stroke-width="1.2"
          />
          <path
            d="M12.9 8.2h-1.2a6 6 0 0 1-.7 0l-.7-.1L9.1 8l-1.3.2-1.4.2h-1l-1 .1M7.5 12.5l-.2-.2-.4-.1-.3-.3-1-1a3 3 0 0 0-.3-.6l-.4-.5-.5-.6-.3-.4c-.1 0-.3-.1-.3-.3M3.8 8.5v-.2c.2 0 .3-.2.4-.4l.7-.5.7-.2c.2-.1.5-.2.6-.5l.3-1.3.3-.4.4-.4"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
          />
        </svg>
      )}
    </button>
  );
};

export default CircleButton;
