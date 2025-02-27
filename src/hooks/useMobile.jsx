<<<<<<< HEAD
import { useEffect, useState } from "react"

const useMobile = (breakpoint = 768) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint)
   
=======
import React, { useEffect, useState } from "react"

const useMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint)

>>>>>>> 00e6150294aa5a607fdcc5d9616556ff2540a9f3
    const handleResize = () => {
        const checkpoint = window.innerWidth < breakpoint
        setIsMobile(checkpoint)
    }
<<<<<<< HEAD

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[])
=======
    useEffect(() => {
        handleResize()

        window.addEventListener("resize", handleResize)
        
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
>>>>>>> 00e6150294aa5a607fdcc5d9616556ff2540a9f3

    return [isMobile]
}

export default useMobile