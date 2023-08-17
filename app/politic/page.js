import Link from 'next/link';
import React from 'react'




const Politic = async () => {


  return (
    <>
    <div>cat page</div>
      <Link href={'/politic/international'}>international</Link>
      <Link href={'/politic/national'}>national</Link>

      
    </>
  )
}

export default Politic