"use client"
import ProductCard from '../components/ProductCard/ProductCard'
import "./SearchProduct.scss"
import SizeFilterBox from './components/SizeFilterBox'
import PriceFilterBox from "./components/PriceFilterBox"
import ColorFilterBox from './components/ColorFilterBox'
import BrandFilterBox from './components/BrandFilterBox'
import { faChevronDown, faSliders } from '@fortawesome/free-solid-svg-icons'
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
          <div className="Quick-Filter-Options">
            <div className="noofresults">
              <div className="heading">Showing: </div>
              <div className="noofvisibleresults">50</div>
              <div className="resultseparator">out of</div>
              <div className="nooffoundresults">1000</div>
            </div>
            <div className="sortbyfilterbox">
              <div className="shortby">
                <div className="text">
                  short by:
                </div>
                <div className="shortingbytext">
                  High to Low
                </div>
                <div className="shortbychevron">
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <div className="othershortoptions">
                  <div className="opt low-to-high">low to high</div>
                  <div className="opt hight to low">high to low</div>
                  <div className="opt featured">featured</div>
                </div>
              </div>
            </div>
          </div>
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
