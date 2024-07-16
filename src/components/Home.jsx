import React, { useEffect, useState } from 'react';
import Coin from './Product';
import axios from 'axios';
import Loader from './Loader';

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllcoins = async () => {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/market?vs_currency=inr&per_page=20'
      );
      console.log(data);

      setCoins(data);
      setLoading(false);
    };
    fetchAllcoins();
  }, []);

  return (
      <div className="home">
        {loading ? (
          <Loader />
        ) :(
          coins.map(i => (
            <Coin
              value={i.name}
              symbol={i.symbol}
              key={i.id}
              imgSrc={i.image}
              price={i.current_price}
            />
          ))
        )}
      </div>
  );
};

export default Home;
