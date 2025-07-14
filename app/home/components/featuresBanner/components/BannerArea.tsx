"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import banner1 from "../../../../../public/assests/banner/banner1.jpg"
import banner2 from "../../../../../public/assests/banner/banner2.jpg"
import banner3 from "../../../../../public/assests/banner/banner3.jpg"
import banner4 from "../../../../../public/assests/banner/banner4.jpg"

const BannerArea = () => {

  const [index, setIndex] = useState(0)


  useEffect(() => {
    const banners = document.getElementsByClassName("Home-Page-Banner") as HTMLCollectionOf<HTMLElement>;

    let interval: NodeJS.Timeout;

    const startSlider = () => {
      interval = setInterval(() => {
        setIndex(prev => {
          const nextIndex = (prev + 1) % banners.length;

          for (let i = 0; i < banners.length; i++) {
            if (nextIndex === 0) {
              banners[i].style.transform = `translateX(0)`;
              banners[i].style.transition = "transform 0s ease-in-out";
            } else {
              banners[i].style.transform = `translateX(-${nextIndex * 100 + 2 * nextIndex}%)`;
              banners[i].style.transition = "transform 0.6s ease-in-out";
            }
          }

          return nextIndex;
        });
      }, 6000);
    };

    const stopSlider = () => clearInterval(interval);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        startSlider();
      } else {
        stopSlider();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Start initially if visible
    if (document.visibilityState === "visible") startSlider();

    return () => {
      stopSlider();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [setIndex]);



  return (
    <div className="Home-Page-Banner-Box">

      <div className="Home-Page-Banner-Container">
        <div className="Home-Page-Banner">
          <Image src={banner1} height={100} width={100} alt='banner' unoptimized className='banner' priority />
        </div>
        <div className="Home-Page-Banner">
          <Image src={banner2} height={100} width={100} alt='banner' unoptimized className='banner' />
        </div>
        <div className="Home-Page-Banner">
          <Image src={banner3} height={100} width={100} alt='banner' unoptimized className='banner' />
        </div>
        <div className="Home-Page-Banner">
          <Image src={banner4} height={100} width={100} alt='banner' unoptimized className='banner' />
        </div>

      </div>
    </div>
  )
}
export default BannerArea