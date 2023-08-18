import React from 'react'


async function getData() {
    const res = await fetch(`https://news-nine-delta.vercel.app/api/articles/search?category=politic&subcategory=international`, {
      cache: "no-store",
    });

    if (!res.ok) {
  
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
 
  
const International = async () => {
  const data = await getData();

  
  return (
    <>
    <div>International</div>
    {
      data.map((a, i) => (
        <div key={i}>{a.tit}</div>
        ))}
        </>
  )
}

export default International