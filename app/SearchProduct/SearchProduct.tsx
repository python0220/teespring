"use client"
import ProductCard from '../components/ProductCard/ProductCard'
import "./SearchProduct.scss"
import SizeFilterBox from './components/SizeFilterBox'
import PriceFilterBox from "./components/PriceFilterBox"
import ColorFilterBox from './components/ColorFilterBox'
import BrandFilterBox from './components/BrandFilterBox'

const SearchProduct = () => {
  

  return (
    <>
      <div className="Search-Product-Page">
        <div className="Filter-Options">
          <SizeFilterBox/>
          <PriceFilterBox />
          <ColorFilterBox/>
          <BrandFilterBox/>
        </div>
        <div className="Product-Show-Case">
          <div className="Quick-Filter-Options">hel</div>
          <div className="Product-Sections">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchProduct
