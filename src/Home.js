import React from 'react'
import { useHistory } from "react-router-dom";


const Home = () => {
    const history = useHistory()

    const routeToOrder = () => {
        history.push('/pizza')
}

    return (
        <div>
            <button onClick={routeToOrder} id="order-pizza">
        Order Pizza now!
      </button>
        </div>
    )
}

export default Home
