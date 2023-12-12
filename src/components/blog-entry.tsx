import React from "react";
import UiLink from "./ui/link";
import Button from "./ui/button";
import Tag from "./tag";
import Person from "./person";

const BlogEntry = ({ post }: { post: unknown }) => {
  return (
    <div className="border-b transition-colors elevated-links first:border-t hover:bg-foreground-tertiary/10">
      <div className="container mx-auto flex gap-6 px-container py-8 @container">
        <div className="hidden flex-1 @6xl:block">
          <Person
            name={post.author.name}
            position={post.author.position}
            photo={post.author.photo}
          />
        </div>
        <div className="w-full max-w-2xl">
          <p className="mb-2 text-base font-medium text-foreground-secondary">
            {post.created_at}
          </p>
          <UiLink
            href={`/blog/${post.slug}`}
            className="max-w-2xl text-4xl elevated-link"
          >
            {post.name}
          </UiLink>
          {post.tag_list.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tag_list.map((tag) => (
                <Tag
                  key={tag}
                  href={`/blog?t=${encodeURIComponent(tag)}`}
                  label={tag}
                />
              ))}
            </div>
          )}
        </div>
        <div className="hidden flex-1 justify-end xl:flex">
          <Button
            as="a"
            variant="secondary"
            arrow
            size="sm"
            href={`/blog/${post.slug}`}
            aria-label="a11y.see-post"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogEntry;
