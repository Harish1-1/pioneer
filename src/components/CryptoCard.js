// CryptoCard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CryptoCard.css'; 

const CryptoCard = () => {
    const [bitcoinData, setBitcoinData] = useState({ USD: {}, EUR: {} });

    useEffect(() => {
        const fetchCryptoPrices = async () => {
            try {
                const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
                const { USD, EUR } = response.data.bpi;
                setBitcoinData({ USD, EUR });
            } catch (error) {
                console.error('Error fetching cryptocurrency data:', error);
            }
        };

        fetchCryptoPrices();
    }, []);

    return (
        <div className="crypto-card-container">
            <div className="crypto-card">
                <h2>Bitcoin</h2>
                <p>{`USD: ${bitcoinData.USD.rate}`}</p>
                <p>{`EUR: ${bitcoinData.EUR.rate}`}</p>
            </div>
            <div className="crypto-card">
                <h2>Ethereum</h2>
                <p>{`USD: ${bitcoinData.USD.rate}`}</p>
                <p>{`EUR: ${bitcoinData.EUR.rate}`}</p>
            </div>
            <div className="crypto-card">
                <h2>USDC</h2>
                <p>{`USD: ${bitcoinData.USD.rate}`}</p>
                <p>{`EUR: ${bitcoinData.EUR.rate}`}</p>
            </div>
            <div className="crypto-card">
                <h2>Liquity</h2>
                <p>{`USD: ${bitcoinData.USD.rate}`}</p>
                <p>{`EUR: ${bitcoinData.EUR.rate}`}</p>
            </div>
        </div>
    );
};

export default CryptoCard;
