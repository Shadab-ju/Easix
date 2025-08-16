const  fetchData = async (url, body)=>{
 const response = await fetch(url, {
  method: 'POST', // HTTP method
  headers: {
    'Content-Type': 'application/json', // Specify the content type
  },
  body: JSON.stringify(body), // Convert data to JSON string
});
    if(!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
    const result = await response.json() 
    return result;
}

export {fetchData}