import { useEffect, useState } from "react";

interface CarouselProps {
    children: React.ReactNode[];
}
const Carousel = ({children}: CarouselProps) => {
    const [currentIndex, setCurrentIndex]= useState(0)
    const carouselScroll= () => {
        if(currentIndex === children.length-1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }

    useEffect(() => {
    const interval= setInterval(() => {carouselScroll()}, 3000)
    return () => clearInterval(interval)}, [currentIndex, children.length])

        return (
            <div>
                {children[currentIndex]}
            </div>
        )
}

export default Carousel

