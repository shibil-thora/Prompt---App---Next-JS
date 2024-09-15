"use client"  // because we are using browser capabilities
import { SessionProvider } from "next-auth/react" 


function Provider({children, session}) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider