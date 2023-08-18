import React from 'react'


async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/search?category=politic&subcategory=international`, {
      cache: "no-store",
    });
  console.log(res);
    if (!res.ok) {
  
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
 
  
const International = async () => {
    const data = await getData();
    console.log(data)
  return (
    <div>International</div>
  )
}

export default International