import React from 'react'
import Header from '../componants/header';
import Slider from '../componants/Slider';
import Bestseller from '../componants/Bestseller';
import Deal from '../componants/Deal';
import Biggest from '../componants/Biggest';
import SmartWatches from '../componants/SmartWatches';
import TrendingWireless from '../componants/TrendingWireless';
import TopEarbuds from '../componants/TopEarbuds';
import Videofast from '../componants/Videofast';
import Videosecond from '../componants/Videosecond';

function Home() {
  return (
    <div>
      <Header/>
      <Slider/>
      <Bestseller/>
      <Deal/>
      <Biggest/>
      <Videofast/>
      <SmartWatches/>
      <TrendingWireless/>
      <Videosecond/>
      <TopEarbuds/>
    </div>
  )
}

export default Home