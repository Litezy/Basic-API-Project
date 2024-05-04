import React, { useEffect, useRef } from 'react'

const ProductModal = ({ product,setModal }) => {
  const refDiv = useRef(null)
  useEffect(()=>{
     if(refDiv){
      window.addEventListener('click', (e) =>{
        if(refDiv.current !== null){
          if(refDiv.current.contains(e.target)){

          }else{
            setModal(false)
          }
        }
      },true)
     }
  },[])
  return (
    <div ref={refDiv} className='absolute w-2/4 flex items-center justify-center  h-fit py-3 bg-black text-white top-[60%] left-10 center'>
      <div className="w-full  flex flex-col h-[90%] px-2 py-2">
        <img src={product.thumbnail} className="w-[60%] rounded-md mb-4 h-full" alt="" />
        <h1 className='font-bold text-lg'>{product.title}</h1>
        <h1>Discounted Price: ${product.discountedPrice}</h1>
        <h1 className='font-bold'>Price: ${product.price}</h1>
        <h1>Quantity: {product.quantity}</h1>
        <h1>Quantity: {product.total}</h1>
        {/* <div onClick={Show} onMouseOver={() => ShowProduct(item.id)} className="w-fit ml-auto">
          <button className='px-4 py-2 bg-black text-white rounded-full mb-2'>learn more</button>
        </div> */}
      </div>


    </div>
  )
}

export default ProductModal