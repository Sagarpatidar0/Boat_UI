import React from 'react'
import Card from '../componants/card'
import Header from '../componants/header'
import datas from '../Data/Daily.json'
function Dailydeals() {
    return (
        <div>
            <Header />
            <div className="daily-contant">
                <h1 className='daily-h1'>Daily Deals</h1>
                <div className="daily-timer"><span>FLASH SALE</span> &emsp; Ending In: 23h 34m 54s</div>
            </div>
            <div className="best best-daily" >
                {datas.map((data) => {
                    return <Card data={data} classbtn="btn-yellow" classoff="off-yellow" cardmob='cardmob' />
                })}

            </div>
        </div>
    )
}

export default Dailydeals