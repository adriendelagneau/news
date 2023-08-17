import Link from 'next/link';
import React from 'react'

async function getData() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/articles/search?category=politic`, {
    cache: "no-store",
  });

  if (!res.ok) {

    throw new Error("Failed to fetch data");
  }

  return res.json();
}


const Politic = async () => {
 const data = await getData();

  return (
    <>
    <div>cat page</div>
      <Link href={'/politic/international'}>international</Link>
      <Link href={'/politic/national'}>national</Link>

      {data.map((a, i) => (
        <div key={i}>{a.title}</div>
      ))}
    </>
  )
}

export default Politic