import React from 'react'
import Card from './card'
import datas from '../Data/boatdata.json'

function TrendingWireless() {
    var data_new = []
    for (let index = 24; index < 32; index++) {
        data_new.push(datas[index])   
    }
    return (
        <div className='bestSeller'>
            <h1 id='bestHeading'>Trending Wireless</h1>
            <div className='best'>
            {data_new.map(data => {
                return (
                    <Card data={data} />
                )
            })}
            </div>

        </div>
    )
}

export default TrendingWireless