import Link from "next/link";

import { Announcement } from "~/components/announcement";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function HomePage() {
  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="relative overflow-hidden pb-10 pt-8 md:pt-16">
          <div className="relative flex flex-col items-center">
            <Announcement />
            <h1 className="bg-colorful-animation relative mt-6 text-center text-4xl font-bold leading-[3rem] tracking-tight max-md:text-balance sm:max-w-4xl sm:text-5xl sm:leading-[4rem] md:text-6xl md:leading-[4.5rem]">
              A blog app with a twist
            </h1>
            <p className="mt-3 max-w-xl text-balance text-center md:text-lg">
              Blog and articles for everyone. Find and read anytime
            </p>
            <div className="mt-6 flex items-center gap-2">
              <Link
                href="/blog"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "animated-button rounded-3xl",
                )}
              >
                <div className="animated-button-bg"></div>
                <span className="animated-button-text">Explore</span>
              </Link>
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "animated-button rounded-3xl",
                )}
              >
                <div className="animated-button-bg"></div>
                <span className="animated-button-text">About Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
