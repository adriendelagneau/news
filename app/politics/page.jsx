import Card from '@/components/Card';
import CardSM from '@/components/CardSM';
import Image from 'next/image'
import React from 'react'


async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/articles/search?category=politic`, {
    cache: "no-store",
  });

  if (!res.ok) {
 
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


const Politics = async () => {
  const data = await getData();


  return (
    <main className="min-h-[200vh] max-w-7xl  mx-auto flex flex-col px-5">      
      
     
      

    </main>
  )
}

export default Politics