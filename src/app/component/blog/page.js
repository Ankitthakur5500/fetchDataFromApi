"use client" 
import React from 'react'
//  const fetcher = () => {
//     let data;
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json => data = json)
//       .then(console.log(data))
        
//      return data
// };
const getData = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    data=await data.json();
    console.log(data);
    return data;
}

const page = async () => {
    const data = await getData();
    console.log("data=>",data)
  return (
    <div>
      {data.map((curElem)=>{
            return (<div key={curElem.id}>
                        <h3>{curElem.id}</h3>
                        <h2>{curElem.title}</h2>
                    </div>
            );
        })}
    </div>
  );
};
export default page;