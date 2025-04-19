import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  pauseDuration?: number;
  eraseSpeed?: number;
}

export function TypingAnimation({
  text,
  className,
  typingSpeed = 150,
  pauseDuration = 2000,
  eraseSpeed = 100,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isTyping && !isPaused) {
      if (displayedText.length < text.length) {
        timer = setTimeout(() => {
          setDisplayedText(text.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        setIsPaused(true);
        timer = setTimeout(() => {
          setIsPaused(false);
          setIsTyping(false);
        }, pauseDuration);
      }
    } else if (!isTyping) {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(text.substring(0, displayedText.length - 1));
        }, eraseSpeed);
      } else {
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [
    displayedText,
    isTyping,
    isPaused,
    text,
    typingSpeed,
    pauseDuration,
    eraseSpeed,
  ]);

  return (
    <div className={cn('flex items-center', className)}>
      <span>{displayedText}</span>
      <span
        className="w-1 h-8 ml-2 bg-current animate-blink"
        style={{ height: '1em' }}
      ></span>
    </div>
  );
}
