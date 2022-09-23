import React from 'react'

function Card(prop) {
  return (
    <div className={'card '+ prop.cardmob}>
      <img src={prop.data.img} alt="" className="card_img" />
      <div className={"off " + prop.classoff}>
        Save:{prop.data.sell.slice(-4, -1)}
      </div>
      <div className="contant">
        <div id="title">
          {prop.data.Title.length > 26 ? prop.cardmob ==='cardmob'?((prop.data.Title.slice(0, 22)) + "..."):((prop.data.Title.slice(0, 26)) + "...") : prop.data.Title}
        </div>
        <hr style={{ color: "black" }} />
        <div id="price">
          {prop.data.price.slice(11,)}<span className='dis'> ₹ {(parseInt(prop.data.sell.slice(13)) - parseInt(prop.data.price.slice(13)))}</span>
        </div>
        <div id="sell">
          {prop.data.sell}
        </div>
        <button id='btn' className={prop.classbtn}><span id='btn-text'>ADD TO CART</span></button>
      </div>
    </div>
  )
}

export default Card