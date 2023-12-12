"use client";
import { useEffect, useState } from "react";
import Slogan from "./Slogan";
import { usePathname } from "next/navigation";
import UiLink from "./ui/link";

const columns = [
  {
    title: "Significa",
    component: "footer-column-internal",
    links: [
      {
        name: "Home",
        full_slug: "/",
      },
      {
        name: "Services",
        full_slug: "/services",
      },
      {
        name: "Work",
        full_slug: "/work",
      },
      {
        name: "Blog",
        full_slug: "/blog",
      },
      {
        name: "About",
        full_slug: "/about",
      },
      {
        name: "Careers",
        full_slug: "/careers",
      },
      {
        name: "Contact",
        full_slug: "/contact",
      },
    ],
  },
  {
    title: "Handbook",
    component: "footer-column-internal",
    links: [
      {
        name: "Handbook",
        full_slug: "/handbook",
      },
      {
        name: "Design",
        full_slug: "/handbook/design",
      },
      {
        name: "Development",
        full_slug: "/handbook/development",
      },
    ],
  },
  {
    title: "Follow Us",
    component: "footer-column-external",
    links: [
      {
        label: "Twitter",
        link: "https://twitter.com/significastudio",
      },
      {
        label: "Instagram",
        link: "https://www.instagram.com/significastudio/",
      },
      {
        label: "LinkedIn",
        link: "https://www.linkedin.com/company/significastudio/",
      },
    ],
  },
];

const Footer = () => {
  const [animate, setAnimate] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const pathname = usePathname();
  if (!mounted) return null;
  return (
    <footer>
      <div className="container mx-auto grid grid-cols-8 gap-8 px-container py-20">
        <div className="col-span-8 md:col-span-3 lg:col-span-4">
          <svg
            width="24"
            height="29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 27.887c-6.39 0-11.59-5.04-11.59-11.285C.41 9.563 6.005.614 12 .614c5.995 0 11.591 8.948 11.591 15.988 0 6.245-5.2 11.285-11.59 11.285Zm0-2.573c5.006 0 9.044-3.913 9.044-8.712 0-5.797-4.765-13.415-9.044-13.415-4.279 0-9.043 7.618-9.043 13.415 0 4.8 4.037 8.712 9.043 8.712Z"
              fill="currentColor"
            ></path>
          </svg>
          <span>
            <Slogan
              animate={animate}
              className="mt-32 hidden font-bold md:block"
            />
          </span>
        </div>

        <div className="col-span-8 flex flex-col gap-8 xs:flex-row md:col-span-5 lg:col-span-4">
          {columns.map((column) => (
            <div key={column.title} className="flex-1">
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-foreground-secondary">
                {column.title}
              </p>
              <ul className="text-lg leading-normal">
                {column.links.map((link) =>
                  column.component === "footer-column-internal" ? (
                    <li key={link.name} className="mb-2">
                      <UiLink
                        className="relative"
                        active={pathname === link.full_slug}
                        href={link.full_slug}
                      >
                        {link.name}
                      </UiLink>
                    </li>
                  ) : (
                    <li key={link.name} className="mb-2">
                      <UiLink href={link.link} target="blank">
                        {link.label}
                      </UiLink>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div className="container mx-auto flex flex-col items-start justify-between px-container py-4 text-sm text-foreground-secondary xs:flex-row xs:items-center">
          <span>Significa &mdash; Design-led digital products</span>
          <UiLink href="/legal">Legal</UiLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
