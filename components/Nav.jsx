import Link from "next/link" ; 
import Image from "next/image"; 
import { useState, useEffect } from "react"; 
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'; 


function Nav() {
  return (
    <div className="text-grdient from-red-600 via-violet-800 to-green-800">Nav</div>
  )
}

export default Nav