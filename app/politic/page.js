import Link from 'next/link';
import React from 'react'

async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/search?category=politic`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
  console.log(res)
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
    
  } catch (err) {
    console.log(err)
  }
}


const Politic = async () => {
 const data = await getData();
console.log(data)
  return (
    <>
    <div>cat page</div>
      <Link href={'/politic/international'}>international</Link>
      <Link href={'/politic/national'}>national</Link>

      
    </>
  )
}

export default Politic