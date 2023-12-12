import BlogEntry from "@/components/blog-entry";
import ProjectEntry from "@/components/project-entry";
import Button from "@/components/ui/button";
import UiLink from "@/components/ui/link";

const posts = [
  {
    author: {
      name: "Ana Fernandes",
      position: "Brand Manger",
      photo: "/images/b-1.png",
    },
    created_at: "2 October 2023",
    slug: "why-should-you",
    name: "Why should you use a design system?",
    tag_list: ["design", "development"],
  },
  {
    author: {
      name: "Ricardo Reis",
      position: "Frontend Developer",
      photo: "/images/b-2.png",
    },
    created_at: "10 August 2023",
    slug: "why-should-you",
    name: "Why should you use a design system?",
    tag_list: ["design", "development"],
  },
];

const projects = [
  {
    id: 1,
    name: "Dia.",
    tagline: "An app to empower women in their fertility journey.",
    recognitions: [
      {
        id: 1,
        label: "Award",
        title: "Red Dot 2022",
        image: "images/awards/1.jpeg",
      },
    ],
    thumbnail: ["/images/projects/p1-1.png", "/images/projects/p1-2.png"],
    link: "/projects/dia",
  },
];
export default function Home() {
  return (
    <>
      <section className="mt-10 md:mt-14 lg:mt-20">
        <div className="container mx-auto px-container">
          <h2 className="text-5xl">Selected work.</h2>
        </div>
        <div className="mt-4 md:mt-6 lg:mt-8">
          {projects &&
            projects.map((project) => (
              <ProjectEntry key={project.id} project={project} />
            ))}
        </div>
      </section>
      <section className="mt-10 md:mt-14 lg:mt-20">
        <div className="container mx-auto px-container">
          <h2 className="text-5xl text-foreground-secondary">Blog.</h2>
          <p className="text-5xl">Our very own meggazine.</p>
        </div>
        <div className="mt-4 md:mt-6 lg:mt-8">
          {posts.map((post, i) => (
            <BlogEntry key={i} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
