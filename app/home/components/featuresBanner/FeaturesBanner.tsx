"use client"
import "./styles.scss"
import FeaturesBox from "./components/FeatureBox"
import BannerArea from "./components/BannerArea"






const FeaturesBanner = () => {
  return (
    <div className='Home-Page-Features-Banner'>
      <BannerArea />
      <div className="Features_Container">
        <FeaturesBox title='Latest Arrivals' />
        <FeaturesBox title='Trending This Week' />
      </div>
    </div>
  )
}

export default FeaturesBanner;
