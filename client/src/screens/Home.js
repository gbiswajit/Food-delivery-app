import React from 'react'
import pizzas from '../pizzasdata'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Pizza from '../components/Pizza'
import { getAllPizzas } from '../actions/pizzaActions'

export default function Home() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPizzas())
    })
    
    return (
        <div>
            <div style={{margin: '25px'}} className='row' >

                {pizzas.map(pizza => {
                    return <div className="col-md-4 p-3 ">
                        <div className='m-3 shadow-lg p-3 mb-5 bg-white rounded'>
                            <Pizza pizza={pizza} />
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}
