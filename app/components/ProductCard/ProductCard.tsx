"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeartCirclePlus, faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import "./ProductCard.scss"
import Link from "next/link";


type ProductCardProps = {
  imagepath?: string,
  brandname?: string,
  title?: string,
  desc?: string,
  rating?: number,
  numberofreviews?: number,
  price?: number
}




const ProductCard = ({ imagepath="../../../public/assests/clothes/boxingpanda.webp", brandname = "Summer Wear", title = "Untitled", desc = "Tshirt | Summer Wears | Light Cotton Tshirts. ", rating = 3.0, numberofreviews = 10, price = 10 }: ProductCardProps) => {


  return (
    <>
      <div  className="Product">
        <div className="Product-Preview">
          <div className="Preview">
            <Image src={imagepath} alt='panda tshirts' className='product-image' width={100} height={100} unoptimized />
          </div>
          <div className="Brand-Info">
            <div className="BrandName">
              {brandname}
            </div>
          </div>
          <div className="SavingOptions">
            <div className="AddToCartOption">
              <div className="AddToCart">
                <FontAwesomeIcon icon={faCartPlus} />
                
              </div>
            </div>
            <div className="AddToFavOption">
              <div className="AddToFav">
                <FontAwesomeIcon icon={faHeartCirclePlus} />
                {/* <FontAwesomeIcon icon={faHeartCircleCheck} /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="Product-Info">
          <div className="Product-Desc">
            <div className="Product-Title">{title}</div>
            <div className="Desc">{desc}</div>
          </div>
          <div className="Product-Rating">
            <div className="Rating">
              <div className="Stars">
                {Array.from({ length: 5 }).map((_, i) => {
                  const current = i + 1;
                  if (rating >= current) {
                    return <FontAwesomeIcon key={i} icon={faStar} className="filled" />;
                  } else if (rating >= current - 0.5) {
                    return <FontAwesomeIcon key={i} icon={faStarHalfStroke} className="half" />;
                  } else {
                    return <FontAwesomeIcon key={i} icon={faStar} className="empty" />;
                  }
                })}
              </div>
              <span className="RatingNumber">{Number.isInteger(rating) ? rating.toFixed(1) : rating}</span>
              <span className="NumberOfReviews" ><Link href="#">{numberofreviews} reviews</Link></span>

            </div>
          </div>
          <div className="Product-Price">
            <div className="Price">
              ${price}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}



export default ProductCard;
