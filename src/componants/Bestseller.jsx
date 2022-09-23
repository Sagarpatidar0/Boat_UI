import React from 'react'
import Card from './card'
import datas from '../Data/Daily.json'
function Bestseller() {
    var data_new = []
    for (let index = 0; index < 8; index++) {
        data_new.push(datas[index])   
    }
    return (
        <div className='bestSeller'>
            <h1 id='bestHeading'>Best Seller</h1>
            <div className='best'>
            {datas.slice(0,8).map(data => {
                return (
                    <Card data={data} />
                )
            })}
            </div>

        </div>
    )
}

export default Bestseller