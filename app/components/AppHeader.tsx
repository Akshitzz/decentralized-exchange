"use client"

import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { PrimaryButton } from './button';
const AppHeader = () => {
    const session = useSession();
  return (
    <div className=' flex justify-between py-2 px-2 order-b'>
        <div className=' p-1 font-bold text-2xl'>       
        LakshyaX
        </div>
        <div>
            {session.data?.user ? <PrimaryButton onClick={()=>signOut()}>Logout</PrimaryButton>: <PrimaryButton onClick={()=>signIn()}>Sign-in</PrimaryButton>}
        </div>
    </div>
  )
}

export default AppHeader
