import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Price(props) {
  // API key from coinapi.io
  const apiKey = '2AA79263-18AE-440D-B5AE-AA2A861B942A';
  // Get the symbol from the URL
  const params = useParams();
  const symbol = params.symbol;
  // using the other two variables to create our URL
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  // create state to hold the coin data
  const [coin, setCoin] = useState('null');

  // function to fetch coin data
  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch (e) {
      console.error(e);
    }
  };

  // useEffect to run getCoin when the component mounts
  useEffect(() => {
    getCoin();
  }, []);

  // create function for when data is fetched/loaded
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // create function for when data is not fetched/loaded
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run loaded function, otherwise run loading function
  return coin && coin.rate ? loaded() : loading();
};

export default Price