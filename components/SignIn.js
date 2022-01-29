import React, { useContext } from 'react'
import { ethers } from 'ethers'
import { GlobalContext } from '../context/GlobalState'
import { getName } from '../utils/name'

export const SignIn = () => {
  const {
    user: {
      account,
      connection,
    }
  } = useContext(GlobalContext);
 
  const { setUser } = useContext(GlobalContext);
  
  async function signIn() {
    const authData = await fetch(`/api/authenticate?address=${account}`)
    const user = await authData.json()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const signature = await signer.signMessage(user.nonce.toString())
    setUser({
      isSigningIn: true,
    });
    const response = await fetch(`/api/verify?address=${account}&signature=${signature}`)
    const data = await response.json()
    const address = await signer.getAddress();
    const ensName = await provider.lookupAddress(address);
    const name = getName({ ensName, address });
    setUser({ 
      name,
      ensName,
      address,
      loggedIn: data.authenticated,
      isSigningIn: false,
      hello: 'world',
    });
  }

  return (
    <button className="btn btn-primary" onClick={signIn}>Sign In</button>
  )
}