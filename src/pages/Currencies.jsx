import React from 'react'
import { Link } from 'react-router-dom'

function Currencies(props) {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
    { name: "Dogecoin", symbol: "DOGE" },
  ];
  return (
    <div>
      {/* loop through array of objects to generate link for each one to the price route*/}
      {
        currencies.map((coin, index)=> {
          // destructure each object into name and symbol variables
          const { name, symbol } = coin;

          return (
            <Link key={index} to={`/price/${symbol}`}>
              <h1> {name} </h1>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Currencies