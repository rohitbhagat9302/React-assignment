import React, { useEffect, useState } from 'react'
import Ratings from "../components/Ratings";
import { faker } from '@faker-js/faker';
import { TbHeart } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";

const ShopPageProducts = () => {
  
   const [favourite, setFavourite] = useState(false)
   const [imageurl, setImageUrl] = useState("")
   const [productName, setProductName] = useState("")

// to like the product
   const likebtn = () => {
        setFavourite(!favourite)
   }

   useEffect(() => {
    setImageUrl(faker.image.url())
    setProductName(faker.commerce.productName())
   }, [])

  return (
    <>
      <div className="singleProduct">
            <img src={imageurl} alt=""/>
            {favourite ? <FaHeart  className='like' onClick={likebtn}/> : <TbHeart className='disLike' onClick={likebtn}/>}
            <p>{productName}</p>
            <div className='hoverProduct'>
              <span>View Products</span>
            </div>
            <div className="priceDiv">
              <del>
                <p className="actualPrice">Rs 500</p>
              </del>
              <p className="discountPrice">Rs 400</p>
            </div>

            <div className="productRating">
              <Ratings totalStars={5} markedStars={5} />
              <span>(201)</span>
            </div>
          </div>
    </>
  )
}

export default ShopPageProducts
