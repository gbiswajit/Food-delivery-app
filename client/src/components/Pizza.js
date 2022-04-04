import React, {useState} from 'react'
import pizzas from '../pizzasdata'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'


export default function Pizza({ pizza }) {
    const [quantity, setquantity]=useState(1)
    const [varient, setvarient]=useState('small')
    const dispatch=useDispatch()
    function addtocart(){
        dispatch(addToCart(pizza, quantity, varient))
    }
    return (
        <div>
            <h1>{pizza.name}</h1>
            <img src={pizza.image} alt="Error Loading" className='img-fluid' style={{ height: '200px' }} />
            <div className='flex-container'>
                <div className='m-1 w-100'>
                    <p>Varients</p>
                    <select className='form-control' value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                        {pizza.varients.map(varient=>{
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className='m-1 w-100'>
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                        {[...Array(10).keys()].map((x, i)=>{
                            return <option value={i+1}>{i+1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className='flex-container'>
                <div className='m-3 w-100'>
                    <h1><b>Price :{pizza.prices[0][varient]*quantity} Rs</b></h1>
                </div>
                <div className='m-1 w-100'>
                    <button className='btn' onClick={addtocart}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
