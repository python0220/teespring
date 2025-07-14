"use client"
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import ProductCard from "../../../../components/ProductCard/ProductCard"


type FeaturesComponentsProps = {
  title: string
}

const FeaturesBox = (props: FeaturesComponentsProps) => {

  const LeftScrollingBar = useRef<HTMLDivElement>(null);
  const RightScrollingBar = useRef<HTMLDivElement>(null);
  const ProductScrollerRef = useRef<HTMLDivElement>(null)

  const ScrollProducts = (
    ref: React.MutableRefObject<HTMLDivElement | null>,
    scroller: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    const ScrolltoRight = ref.current?.classList.contains("right");
    const element = scroller.current;

    if (!element) return;

    const ScrollAmount = element.offsetWidth; // Use container's width

    element.scrollBy({
      left: ScrolltoRight ? ScrollAmount : -ScrollAmount,
      behavior: "smooth",
    });
  };

  const sampleProducts = [
    {
      imagepath: "/drop/1.1.jpg",
      brandname: "HawkFit",
      title: "Performance Dry Tee",
      desc: "Stretch fabric | Quick-dry | Lightweight",
      rating: 4.5,
      numberofreviews: 87,
      price: 29.99,
    },
    {
      imagepath: "/drop/1.2.jpg",
      brandname: "UrbanEdge",
      title: "Cropped Summer Tee",
      desc: "Soft cotton | Streetwear style",
      rating: 4.0,
      numberofreviews: 120,
      price: 19.5,
    },
    {
      imagepath: "/drop/1.3.jpg",
      brandname: "Chroma",
      title: "Gradient Wash Shirt",
      desc: "Vintage fade | Cotton-poly blend",
      rating: 3.5,
      numberofreviews: 34,
      price: 21.0,
    },
    {
      imagepath: "/drop/1.4.jpg",
      brandname: "ZenMode",
      title: "Relax Fit Tee",
      desc: "Oversized | Ultra-breathable | Neutral tones",
      rating: 4.8,
      numberofreviews: 56,
      price: 32.0,
    },
    {
      imagepath: "/drop/1.5.jpg",
      brandname: "VibeCraft",
      title: "Art Print Graphic Tee",
      desc: "Bold visuals | Printed on front and back",
      rating: 3.0,
      numberofreviews: 23,
      price: 17.75,
    },
    {
      imagepath: "/drop/1.6.jpg",
      brandname: "ThreadCulture",
      title: "Minimal Pocket Tee",
      desc: "Chest pocket | Pre-washed fabric",
      rating: 4.2,
      numberofreviews: 64,
      price: 22.0,
    },
    {
      imagepath: "/drop/1.7.jpg",
      brandname: "NordThreads",
      title: "Essential White Tee",
      desc: "Clean classic | Premium cotton",
      rating: 4.9,
      numberofreviews: 142,
      price: 27.0,
    },
    {
      imagepath: "/drop/1.8.jpg",
      brandname: "FlexFit",
      title: "Stretch Slim Tee",
      desc: "Workout-ready | Breathable fit",
      rating: 4.0,
      numberofreviews: 58,
      price: 26.5,
    },
    {
      imagepath: "/drop/1.9.jpg",
      brandname: "Soften",
      title: "Relaxed Summer Wear",
      desc: "Loose fit | Pastel tones | Super soft",
      rating: 3.8,
      numberofreviews: 44,
      price: 18.99,
    },
    {
      imagepath: "/drop/1.10.jpg",
      brandname: "BoltWear",
      title: "Electro Line Tee",
      desc: "Electric print | Festival vibe",
      rating: 2.5,
      numberofreviews: 12,
      price: 16.0,
    },
  ];



  return (
    <div className="Features_Box">
      <div className="Title">{props.title}</div>
      <div className="Parent-Box-Scroller" >

        <div className="Product-Box-Scroller" ref={ProductScrollerRef}>

          <div className="Products_Box">
            {sampleProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          
        </div>
        <div ref={LeftScrollingBar} className="Scroller-Button right" onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          ScrollProducts(LeftScrollingBar, ProductScrollerRef)
        }}>

          <div className="Button">
            <FontAwesomeIcon icon={faCircleChevronRight} />
          </div>
        </div>
        <div ref={RightScrollingBar} className="Scroller-Button left" onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          ScrollProducts(RightScrollingBar, ProductScrollerRef)
        }} >
          <div className="Button" >
            <FontAwesomeIcon icon={faCircleChevronLeft} />
          </div>
        </div>
      </div>
    </div >
  )
}

export default FeaturesBox;