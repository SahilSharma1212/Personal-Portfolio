import Image from 'next/image'
import React from 'react'

export default function ProfileCard() {
  return (
   
      <div className="float-right flex flex-col p-7 justify-center bg-black/25 rounded-xl border-slate-700 border sm:mt-9 ">
      
                  <Image src="/dp.jpg" className="dark min-h-80 min-w-80 max-h-48 max-w-50 rounded-lg opacity-100" alt='my image' width={320} height={192}/>
                  
                  <div className="py-3 text-white flex flex-col gap-3">
                  <p className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-4xl bg-opacity-50"> Sahil Sharma</p>
                  <span>Persuing BTech in BIT DURG</span>
                  </div>
             
    </div>
  )
}
