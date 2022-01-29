import React, { useContext } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { GlobalContext } from '../context/GlobalState'

export const ConnectWallet = () => {
  const { setUser } = useContext(GlobalContext);
 
  async function getWeb3Modal() {
    let Torus = (await import('@toruslabs/torus-embed')).default
    const web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: false,
      providerOptions: {
        torus: {
          package: Torus
        },
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: '8cf3cad623da43f9a84ab5ac94230cf6'
          },
        },
      },
    })
    return web3Modal
  }

  async function connect() {
    const web3Modal = await getWeb3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const accounts = await provider.listAccounts()
    setUser({
      connection,
      account: accounts[0],
    });
  }

  return (
    <button className="btn btn-primary" onClick={connect}>Connect Wallet</button>
  )
}
