"use client";
import clsx from "clsx";
import { useState } from "react";
import Button from "./ui/button";
import Recognitions from "./recognitions";
import Image from "next/image";
import CircleButton from "./circle-button";

const ProjectEntry = ({ project }) => {
  const [index, setIndex] = useState(0);

  let variant = "default";
  return (
    <div className="group border-b py-12 transition-colors elevated-links @container first:border-t hover:bg-foreground-tertiary/10">
      <div
        className={clsx(
          "container mx-auto px-container",
          variant === "default" && "@5xl:flex"
        )}
      >
        <div
          className={clsx(
            variant === "featured" && "items-end justify-between @5xl:flex",
            variant === "default" &&
              "flex flex-1 flex-col items-start justify-between"
          )}
        >
          <div className="mr-6">
            <a className="elevated-link" href={`/projects/${project.slug}`}>
              <h3 className="text-5xl text-foreground-secondary">
                {project.name}
              </h3>
              <p
                className={clsx(
                  "text-5xl",
                  variant === "default" ? "max-w-lg" : "max-w-3xl"
                )}
              >
                {project.tagline}
              </p>
            </a>
            {project.recognitions?.length && (
              <div
                className={clsx(
                  "mt-6 flex gap-4",
                  variant === "featured" ? "" : "flex-col"
                )}
              >
                <Recognitions recognitions={project.recognitions} />
              </div>
            )}
          </div>
          <Button
            as="a"
            href={`/projects/${project.slug}`}
            className="mt-6"
            variant="secondary"
            arrow
          >
            view-project
          </Button>
        </div>

        {variant === "default" && project.thumbnail.length && (
          <>
            {
              <>
                <div className="pointer-events-none relative mt-8 aspect-[4/3] flex-1 @5xl:mt-0">
                  <Image
                    className="h-full w-full rounded-md bg-background-offset object-cover"
                    src={project.thumbnail[index]}
                    alt={"random"}
                    width={1440}
                    height={1080}
                    priority
                  />
                  {project.thumbnail.length > 1 && (
                    <>
                      <CircleButton
                        alt="Previous image"
                        data-theme="light"
                        className="pointer-events-auto absolute left-2 top-1/2 z-10 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 [@media(hover:none)]:opacity-100"
                        onClick={() => {
                          setIndex((index) =>
                            index === 0
                              ? project.thumbnail.length - 1
                              : index - 1
                          );
                        }}
                        icon="arrow-left"
                      />
                      <CircleButton
                        alt="Next image"
                        data-theme="light"
                        className="pointer-events-auto absolute right-2 top-1/2 z-10 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 [@media(hover:none)]:opacity-100"
                        onClick={() => {
                          setIndex((index) =>
                            index === project.thumbnail.length - 1
                              ? 0
                              : index + 1
                          );
                        }}
                        icon="arrow-right"
                      />
                    </>
                  )}
                </div>
              </>
            }
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectEntry;
