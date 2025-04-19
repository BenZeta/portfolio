'use client';

import { AnimatedSkills } from '@/components/animated-skills';
import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { ProjectCard } from '@/components/project-card';
import { ResumeCard } from '@/components/resume-card';
import { TypingAnimation } from '@/components/typing-animation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DATA } from '@/data/resume';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Markdown from 'react-markdown';

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = carouselRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0.5; // Slower scrolling for smoother motion
    let isPaused = false;
    let animationId: number;

    const scroll = () => {
      if (!scrollContainer || isPaused) return;

      scrollContainer.scrollLeft += scrollAmount;

      // If we reach the end, reset to the beginning with a smooth transition
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        // Set a flag to avoid multiple resets at once
        isPaused = true;

        // Create a smooth transition back to start
        const startPosition = scrollContainer.scrollLeft;
        const duration = 1000; // 1 second transition
        const startTime = performance.now();

        const smoothReset = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Easing function for smooth deceleration
          const easeOut = 1 - Math.pow(1 - progress, 3);

          scrollContainer.scrollLeft = startPosition - startPosition * easeOut;

          if (progress < 1) {
            requestAnimationFrame(smoothReset);
          } else {
            // Resume normal scrolling
            isPaused = false;
            animationId = requestAnimationFrame(scroll);
          }
        };

        requestAnimationFrame(smoothReset);
        return;
      }

      animationId = requestAnimationFrame(scroll);
    };

    // Start scrolling
    animationId = requestAnimationFrame(scroll);

    // Pause scrolling when hovering
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero" className="max-w-2xl mx-auto w-full">
        <div className="w-full space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFade delay={BLUR_FADE_DELAY} yOffset={8}>
                <div className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  <TypingAnimation
                    text={`Hi, I'm ${DATA.name.split(' ')[0]} 👋`}
                    typingSpeed={100}
                    pauseDuration={3000}
                    eraseSpeed={75}
                  />
                </div>
              </BlurFade>
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                  className="object-cover object-top"
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about" className="max-w-2xl mx-auto w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="education" className="max-w-2xl mx-auto w-full">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills" className="max-w-2xl mx-auto w-full">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <AnimatedSkills skills={DATA.skills} />
          </BlurFade>
        </div>
      </section>
      <section id="projects" className="w-full max-w-none px-0 -mx-6">
        <div className="space-y-8 w-full pt-20 pb-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-2xl mx-auto px-6">
              <div className="space-y-5">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="relative w-full overflow-hidden">
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6 no-scrollbar"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollBehavior: 'smooth',
              }}
            >
              {/* Add extra spacing at beginning */}
              <div className="shrink-0 w-[5vw]" />

              {DATA.projects.map((project, id) => (
                <div
                  key={project.title}
                  className="shrink-0 snap-center w-[280px] md:w-[350px]"
                >
                  <BlurFade delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                    <div className="h-[240px] md:h-[420px] flex flex-col">
                      <ProjectCard
                        href={project.href}
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        dates={project.dates}
                        tags={project.technologies}
                        image={project.image}
                        video={project.video}
                        links={project.links}
                        className="flex-1 flex flex-col h-full"
                      />
                    </div>
                  </BlurFade>
                </div>
              ))}

              {/* Add extra spacing at end */}
              <div className="shrink-0 w-[5vw]" />
            </div>

            {/* Gradient overlay at the edges to hint that it scrolls */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </section>
      <section id="contact" className="max-w-2xl mx-auto w-full">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{' '}
                <Link
                  href={DATA.contact.social.whatsapp.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on WhatsApp
                </Link>{' '}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
