"use client"
import ProductCard from '../components/ProductCard/ProductCard'
import "./SearchProduct.scss"
import SizeFilterBox from './components/SizeFilterBox'
import PriceFilterBox from "./components/PriceFilterBox"
import ColorFilterBox from './components/ColorFilterBox'
import BrandFilterBox from './components/BrandFilterBox'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchProduct = () => {


  return (
    <>
      <div className="Search-Product-Page">
        <div className="FilterOPtionsContainer">


          <div className="FilterOptions">
            <div className="FilterHeader">
              <div className="Heading">Filter</div>
              <div className="FilterIcon">
                <FontAwesomeIcon icon={faSliders} />
              </div>
            </div>
            <SizeFilterBox />
            <PriceFilterBox />
            <ColorFilterBox />
            <BrandFilterBox />
            <div className="ApplyFilterButtonContainer">
              <div className="ApplyFilterButton">
                Apply
              </div>
            </div>
          </div>
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
