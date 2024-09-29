import React, { useEffect, useState } from 'react'
function useFetch(url) {
  const [data, setData] = useState([]);
    useEffect(()=> {
        fetch(url)
        .then((res)=> res.json())
        .then((data)=> setData(data));
    }, [url])
  return {data, setData}
}

export default useFetch
