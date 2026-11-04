/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Post } from "@/lib/blog";
import { readMinutes } from "@/lib/blog";

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

/** Article card with a 3D mouse tilt; `flip` sets the scroll-in direction. */
export default function BlogCard({ post, flip, large }: { post: Post; flip?: "l" | "r"; large?: boolean }) {
  return (
    <div className="blog-stage h-full" data-3d={flip ? `flip-${flip}` : undefined}>
      <article className="h-full" data-tilt-hover>
        <div className="tilt-inner h-full">
          <div className={`blog-card ${large ? "blog-large lg:grid lg:grid-cols-[1.25fr_1fr]" : ""}`}>
            <div className={`blog-cover ${large ? "lg:border-b-0 lg:border-r" : ""}`}>
              <Link href={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true" className="block h-full">
                <img src={post.cover} alt="" loading={large ? "eager" : "lazy"} />
              </Link>
            </div>
            <div className={`flex min-w-0 flex-1 flex-col ${large ? "p-7 sm:p-10" : "p-6"}`}>
              <div className="flex flex-wrap items-center gap-3 text-xs text-cream-muted">
                <span className="blog-cat">{post.category}</span>
                <span>
                  <time dateTime={post.date}>{fmt(post.date)}</time> · {readMinutes(post)} min read
                </span>
              </div>
              <h3 className={`mt-4 font-display leading-tight text-cream ${large ? "text-3xl sm:text-[2.4rem]" : "text-[1.45rem]"}`}>
                <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                  {post.title}
                </Link>
              </h3>
              <p className={`mt-3 flex-1 leading-relaxed ${large ? "text-[17px]" : "text-[15px]"}`}>{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="arrow-link stretched mt-5" aria-hidden="true" tabIndex={-1}>
                Read the article <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
