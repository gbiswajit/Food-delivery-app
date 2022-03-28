import React from 'react'
import pizzas from '../pizzasdata'
import Pizza from '../components/Pizza'

export default function Home() {
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
