import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'scale-in' | 'slide-in-left' | 'slide-in-right';
  delay?: number;
}

export const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-in-up',
  delay = 0
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section 
      ref={ref}
      className={`${className} ${
        isVisible ? `animate-${animation}` : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
};