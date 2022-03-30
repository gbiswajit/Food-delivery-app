import React from 'react'
//import pizzas from '../pizzasdata'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Pizza from '../components/Pizza'
import { getAllPizzas } from '../actions/pizzaActions'

export default function Home() {

    const dispatch = useDispatch()
    const pizzasstate=useSelector((state)=> state.getAllPizzasReducers)
    const{pizzas, error, loading}=pizzasstate
    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])
    
    
    return (
        <div>
            <div style={{margin: '25px'}} className='row justify-content-center' >


                {loading? <h1>Loading</h1> :error? <h1>Error</h1>: (
                    pizzas.map(pizza => {
                        return (
                        <div className="col-md-4" key={pizza._id}>
                            <div className='m-3 shadow-lg p-3 mb-5 bg-white rounded'>
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                    )
                    })

                )}

            </div>
        </div>
    )
}
