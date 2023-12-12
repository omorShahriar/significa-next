'use client';
import { useState, useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";
import Button from "./ui/button";
import Link from "./ui/link";
import { usePathname } from "next/navigation";

const TopNavigation = () => {
  const pathname = usePathname();
  const SCROLL_DIR_THRESHOLD = 76;
  const SCROLL_THRESHOLD = 200;
  const [panel, setPanel] = useState(false);
  const [scrollDir, setScrollDir] = useState<"down" | "up">("down");
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [ticking, setTicking] = useState(false);
  const [isPastThreshold, setIsPastThreshold] = useState(false);
  const [isPastZero, setIsPastZero] = useState(false);

  const updateScrollDir = () => {
    if (Math.abs(scrollY - lastScrollY) <= SCROLL_DIR_THRESHOLD) {
      setTicking(false);
      return;
    }

    const nextDir = scrollY > lastScrollY ? "down" : "up";
    if (nextDir !== scrollDir) {
      setScrollDir(nextDir);
    }

    const last = scrollY > 0 ? scrollY : 0;
    setLastScrollY(last);

    if (last > SCROLL_THRESHOLD) {
      setIsPastThreshold(true);
    } else {
      setIsPastThreshold(false);
    }

    setTicking(false);
  };
  const onScroll = () => {
    setScrollY(window.scrollY);

    if (scrollY > 0) {
      setIsPastZero(true);
    } else {
      setIsPastZero(false);
    }

    if (!ticking) {
      window.requestAnimationFrame(updateScrollDir);
      setTicking(true);
    }
  };
  const onkeydown = (event) => {
    if (event.key === 'Escape') {
      setPanel(false);
    }
  };
  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className="mb-px h-[76px]">
      <header
        className={clsx(
          "ease-[cubic-bezier(0.90, 0, 0.05, 1)] z-30 w-full border-b bg-background/95 backdrop-blur-md transition-[transform,border-color] duration-300 fixed",

          !isPastZero && "border-b-transparent",
          !isPastThreshold
            ? "translate-y-0"
            : scrollDir === "down"
            ? "-translate-y-full"
            : "translate-y-0"
        )}
      >
        <div
          className={clsx(
            "flex items-center justify-between py-4 container mx-auto px-container"
          )}
        >
          <div className="flex items-center gap-2">
            <a aria-label="Go to homepage" href="/">
              <Image
                src="/logo.svg"
                alt="logo"
                unoptimized
                priority
                width={96}
                height={25}
              />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-6 text-base font-medium leading-relaxed md:flex">
            <Link active={pathname == "/projects"} href="/">Projects</Link>
            <Link active={pathname == "/services"} href="/">Services</Link>
            <Link active={pathname == "/about"} href="/">About</Link>

          </div>
          <div className="flex items-center gap-4">
            <div className="hidden [@media(min-width:400px)]:block">
              <Button as="a" href="#">
                get a quote
              </Button>
            </div>

            <Button
              aria-label="Open menu"
              variant="secondary"
              icon="3dots"
              onClick={() => {
                setPanel(true);
              }}
            />
          </div>
        </div>
      </header>

      {
        panel ? (
            <>
             <div
     role="button"
      tabIndex={0}
      onKeyDown={onkeydown}
      className="fixed inset-0 z-50 bg-black/50"
      onClick={() => setPanel(false)}
    />
    <div
      transition:fly|global={{ x: 1000, duration: 300 }}
      use:clickOutside={() => (panel = false)}
       className={clsx(
         'px-container pl-6',
          'fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-sm flex-col items-start overflow-y-auto bg-background py-4'
        )}
    >
      <div className="flex w-full items-center justify-between">
        <Logo variant="symbol" />
        <div className="flex gap-4">
          {#if configuration.call_to_action?.length}
            {@const { href } = getAnchorFromCmsLink(configuration.call_to_action[0].link)}
            <Button
              className="flex-shrink-0"
              as="a"
              {href}
              on:click={() => {
                track(TrackingEvent.GET_A_QUOTE_LINK, {
                  props: { path: $page.url.pathname, context: 'navigation menu' }
                });
              }}>{configuration.call_to_action[0].label}</Button
            >
          {/if}
          <Button
            aria-label="Close menu"
            size="md"
            variant="secondary"
            icon="close"
            on:click={() => (panel = false)}
          />
        </div>
      </div>

      <div className="flex-1">
        {#each configuration.footer || [] as column}
          <div className="mt-8">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-foreground-secondary">
              {column.title}
            </p>
            <ul className="text-lg font-medium">
              {#each column.links || [] as link}
                {#if column.component === 'footer-column-internal'}
                  <li className="mb-1 flex items-center gap-1.5">
                    <Link className="inline-block" href={sanitizeSlug(link.full_slug)}>{link.name}</Link
                    >
                    {#if sanitizeSlug(link.full_slug) === '/careers'}
                      {#if $page.data.careers.length}
                        <div aria-hidden="true">
                          <Badge className="text-xs">{$page.data.careers.length}</Badge>
                        </div>
                      {/if}
                    {/if}
                  </li>
                {:else if column.component === 'footer-column-external'}
                  {@const { href, target, rel } = getAnchorFromCmsLink(link.link)}
                  <li className="mb-1">
                    <Link className="inline-block" {href} {target} {rel}>{link.label}</Link>
                  </li>
                {/if}
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div></div></>
        ) : null
      }
    </div>
  );
};

export default TopNavigation;
