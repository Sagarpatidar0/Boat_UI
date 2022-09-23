import React from 'react'
import Card from './card'
import datas from '../Data/boatdata.json'

function Biggest() {
    var data_new = []
    for (let index = 16; index < 24; index++) {
        data_new.push(datas[index])
    }
    return (

        <div className='bestSeller'>
            <h1 id='bestHeading'>Biggest Launches. Dopest Products. 🚀</h1>
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

export default Biggest