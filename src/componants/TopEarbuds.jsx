import React from 'react'
import Card from './card'
import datas from '../Data/boatdata.json'

function TopEarbuds() {
    var data_new = []
    for (let index = 32; index < datas.length; index++) {
        data_new.push(datas[index])   
    }
    return (
        <div className='bestSeller'>
            <h1 id='bestHeading'>Top Earbuds</h1>
            <div className='best'>
            {data_new.map(data => {
                return (
                    <Card data={data} key={data.Title} />
                )
            })}
            </div>

        </div>
    )
}

export default TopEarbuds