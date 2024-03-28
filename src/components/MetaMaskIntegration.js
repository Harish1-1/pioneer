import React, { Component } from 'react';
import Web3 from 'web3';

class MetaMaskIntegration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      errorMessage: ''
    };
  }

  connectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          this.setState({ isConnected: true, errorMessage: '' });
        }
      } else {
        this.setState({ isConnected: false, errorMessage: 'MetaMask extension not detected.' });
      }
    } catch (error) {
      this.setState({ isConnected: false, errorMessage: error.message });
    }
  };

  render() {
    const { isConnected, errorMessage } = this.state;

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px',
    };

    const headingStyle={
      color:'blue',
    }

    const buttonStyle = {
      backgroundColor: '#4CAF50', 
      color: 'white', 
      padding: '10px 20px', 
      border: 'none', 
      borderRadius: '5px', 
      cursor: 'pointer', 
      fontSize: '16px', 
      marginBottom: '20px', 
    };

    const messageStyle = {
      color: isConnected ? '#28a745' : '#dc3545', 
      fontSize: '18px', 
    };

    return (
      <div style={containerStyle}>
        <h1 style={headingStyle}>Click on the below button to connect with metamask wallet</h1>
        <button onClick={this.connectWallet} style={buttonStyle}>
          Connect Wallet
        </button>
        {isConnected && <p style={messageStyle}>Wallet connected successfully!</p>}
        {errorMessage && <p style={messageStyle}>{errorMessage}</p>}
      </div>
    );
  }
}

export default MetaMaskIntegration;
