"use client"
import { signIn } from "next-auth/react"
import { SecondaryButton } from "./button"
import { useSession  } from "next-auth/react"
import { useRouter } from "next/navigation"
export const HeroSection =()=>{
    const session = useSession();
    const router = useRouter();
    return (
        <div className="flex flex-col items-center h-1/3 gap-3 ">
           <div className="flex flex-col items-center">
                 <span className='text-6xl font-bold  text-blue-950 '> Focused on</span>
                  <span className='text-6xl font-bold  text-blue-950'>your <span className="text-blue-500">crypto</span> goals.</span>
           </div>
           <p className="text-gray-500  text-2xl tracking-tight py-2"> Seamless wallet access with just your Google Account. </p>
              {
               session.data?.user ? <SecondaryButton onClick={()=>{router.push('/dashboard')}}>Go to DashBoard</SecondaryButton>:<SecondaryButton onClick={()=>{signIn("google")}}>Login with Google</SecondaryButton>
              }
        </div>
    )
}