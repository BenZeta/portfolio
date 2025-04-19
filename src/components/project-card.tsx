import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import Markdown from 'react-markdown';

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export const ProjectCard = memo(function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        'flex flex-col overflow-hidden border transition-all duration-300 ease-out h-full will-change-transform',
        className
      )}
    >
      <div className="flex flex-col h-full">
        <Link href={href || '#'} className="block">
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
              style={{ transform: 'translateZ(0)' }}
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              priority
              sizes="(max-width: 768px) 280px, 350px"
              quality={75}
              className="h-40 w-full overflow-hidden object-cover object-top"
              style={{ transform: 'translateZ(0)' }}
            />
          )}
        </Link>
        <CardHeader className="px-2 flex-shrink-0">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <time className="font-sans text-xs">{dates}</time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link
                ?.replace('https://', '')
                .replace('www.', '')
                .replace('/', '')}
            </div>
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert line-clamp-3">
              {description}
            </Markdown>
          </div>
        </CardHeader>

        <div className="flex-grow"></div>

        <CardContent className="px-2 flex-shrink-0 pt-0">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags?.slice(0, 6).map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="px-2 pb-2 mt-auto flex-shrink-0">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-1">
              {links?.map((link, idx) => (
                <Link href={link?.href} key={idx} target="_blank">
                  <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </div>
    </Card>
  );
});

// For backwards compatibility
export function ProjectCardComponent(props: Props) {
  return <ProjectCard {...props} />;
}
