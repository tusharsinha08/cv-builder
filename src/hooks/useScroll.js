import { useEffect, useState } from "react";

export function useScroll() {
    const [scrollDirection, setScrollDirection] = useState("up");

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;

            if (Math.abs(scrollY - lastScrollY) < 50) {
                return;
            }

            setScrollDirection(scrollY > lastScrollY ? "down" : "up");

            lastScrollY = scrollY;
        };

        window.addEventListener("scroll", updateScrollDirection, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        };
    }, []);

    return scrollDirection;
}