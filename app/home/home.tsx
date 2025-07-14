import React from 'react'
import WearOptions from './components/WearOptions/WearOptions'
import FeaturesBanner from './components/featuresBanner/FeaturesBanner'
const HomePage = () => {
  return (
    <div className='Home-page' style={{width: "100%", height:"auto"}}>
        {/* <WearOptions/> */}
        <FeaturesBanner/>
    </div>
  )
}

export default HomePage
