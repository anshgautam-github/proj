import React from 'react'
import { SignedIn,SignInButton,SignedOut,SignUpButton,UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <div>
        <SignedOut>
            <SignInButton />    
        </SignedOut>
        <SignedIn>
                <UserButton />
        </SignedIn>
    </div>
    
  )
}

export default Header