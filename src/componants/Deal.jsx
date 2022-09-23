import React from 'react'
import Card from './card'
import datas from '../Data/Daily.json'

function Deal() {
    var data_new = []
    for (let index = 8; index < 16; index++) {
        data_new.push(datas[index])
    }
    return (

        <div className='bestSeller'>
            <h1 id='bestHeading'>Daily Deals</h1>
            <div className='best'>
                {data_new.map((data,key) => {
                    return (
                        <Card data={data} key={key} />
                    )
                })}
            </div>
        </div>
    )
}

export default Deal