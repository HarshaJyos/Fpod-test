import { useEffect, useRef } from 'react';

const useScrollReveal = (delay = 0) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('reveal-active');
                        }, delay);
                        // Optional: Unobserve if we only want it to happen once
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% visible
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            // Add base class for styling
            currentRef.classList.add('reveal-hidden');
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [delay]);

    return ref;
};

// CSS style injection for the reveal effect
const style = document.createElement('style');
style.innerHTML = `
  .reveal-hidden {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
  }
  .reveal-active {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

export default useScrollReveal;
