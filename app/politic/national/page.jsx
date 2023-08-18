import React from 'react'


async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/search?category=politic&subcategory=national`, {
    cache: "no-store",
  });

  if (!res.ok) {

    throw new Error("Failed to fetch data");
  }

  return res.json();
}


const National = async () => {

  const data = await getData();
  console.log(data)

  return (
    <div>National</div>
  )
}

export default National