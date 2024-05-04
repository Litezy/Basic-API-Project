import React, { useEffect, useState } from 'react'
import ProductModal from './ProductModal'

const Homepage = () => {


    const [product,setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const  [modal,setModal] = useState(false)
    const [carts, setCarts] = useState([])
    const [total, setTotal] = useState()
    const [products1, setProducts1] = useState([])
    const [products2, setProducts2] = useState([])
    const [products3, setProducts3] = useState([])

    const URL = 'https://dummyjson.com/carts'
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(URL)
                const result = await response.json()
                setCarts(result.carts)
                setTotal(result)
                setProducts1(result.carts[0].products)
                setProducts2(result.carts[1].products)
                setProducts3(result.carts[2].products)
            } catch (error) {
                  alert(`${error.message}`)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
        // console.log(carts,products1, products2, products3)
    }, [])

    const ShowProduct = (id)=>{
     setProduct( product =>{
        const selected = products1.filter((item) => item.id === id)
        product = selected
        return product
     })
    }
    const Show =()=>{
        console.log(product)
        setModal(!modal)
    }
        
    
    return (
        <div className={`w-11/12 mx-auto ${loading ? 'h-screen' : 'h-full'}  mt-10 pb-5`}>
            {loading === true && <>
                <div className="flex w-full h-full items-center justify-center">
                    <h3 className='w-full h-full items-center flex justify-center '>Loading...</h3>
                </div>
            </>}
            {loading === false && <>
                <div className="flex items-center justify-center flex-col w-3/4 mx-auto relative">
                    <h1 className='text-3xl font-bold mb-4'>React Basic API Projext</h1>
                    <input type="text" placeholder='search cart' className='border-2 w-2/4 pl-3 h-12 rounded-md outline-none' />
                </div>
                <div className="mt-20  h-fit w-11/12 mx-auto">
                <h1 className='text-2xl font-bold text-left '>First Collection of Products</h1>
                    <div className="w-full h-full grid grid-cols-3 gap-4 items-center">
                        {products1.map((item, i) => (
                            <div key={i} className="w-full  flex flex-col mb-10 border-2 h-[90%] px-2 py-2">
                                <img src={item.thumbnail} className="w-[60%] rounded-md mb-4 h-full" alt="" />
                                <h1 className='font-bold text-lg'>{item.title}</h1>
                                <h1 className='line-through'>Discounted Price: ${item.discountedPrice}</h1>
                                <h1 className='font-bold'>Price: ${item.price}</h1>
                                <h1>Quantity: {item.quantity}</h1>
                                <h1>Quantity: {item.total}</h1>
                                <div onClick={Show} onMouseOver={() => ShowProduct (item.id)} className="w-fit ml-auto">
                                    <button className='px-4 py-2 bg-black text-white rounded-full mb-2'>learn more</button>
                                </div>
                            </div>
                            
                        ))}
                    </div>
                </div>
                {modal && <ProductModal product={product[0]} setModal={setModal}/>}
                
                <div className="mt-20  h-fit w-11/12 mx-auto ">
                <h1 className='text-2xl font-bold text-left '>Second Collection of Products</h1>
                    <div className="w-full h-full grid grid-cols-3 gap-4 items-center">
                        {products2.map((item, i) => (
                            <div key={i} className="w-full  flex flex-col mb-10 border-2 h-[90%] px-2 py-3">
                                <img src={item.thumbnail} className="w-[60%] rounded-md mb-4 h-full" alt="" />
                                <h1 className='font-bold text-lg'>{item.title}</h1>
                                <h1>Discounted Price: ${item.discountedPrice}</h1>
                                <h1 className='font-bold'>Price: ${item.price}</h1>
                                <h1>Quantity: {item.quantity}</h1>
                                <h1>Quantity: {item.total}</h1>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-20  h-fit w-11/12 mx-auto ">
                <h1 className='text-2xl font-bold text-left '>Third Collection of Products</h1>
                    <div className="w-full h-full grid grid-cols-3 gap-4 items-center">
                        {products3.map((item, i) => (
                            <div key={i} className="w-full  flex flex-col mb-10 border-2 h-[90%] px-2 py-3">
                                <img src={item.thumbnail} className="w-[60%] rounded-md mb-4 h-full" alt="" />
                                <h1 className='font-bold text-lg'>{item.title}</h1>
                                <h1>Discounted Price: ${item.discountedPrice}</h1>
                                <h1 className='font-bold'>Price: ${item.price}</h1>
                                <h1>Quantity: {item.quantity}</h1>
                                <h1>Quantity: {item.total}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </>}
        </div>
    )
}

export default Homepage

// discountPercentage
// :
// 8.71
// discountedPrice
// :
// 55
// id
// :
// 59
// price
// :
// 20
// quantity
// :
// 3
// thumbnail
// :
// "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
// title
// :
// "Spring and summershoes"
// total
// :
// 60