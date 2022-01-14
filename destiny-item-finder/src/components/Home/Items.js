import { useState, useEffect } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from "../Utils/AxiosWithAuth";


const DisplayItemsForm = () => {

  const [ item, setItem ] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get('/Destiny2/Armory/Search/DestinyInventoryItemDefinition/the-last-word/')
    .then(res => {
      // console.log(res.data.Response.results)
      setItem(res.data.Response.results.results)
    })
    .catch(err => {
      console.log(err)
    })
  },[])
  console.log(item[0])
  return (

    <div>
      Items Here
      {item[0].displayProperties.name}
    </div>
  )
}

export default DisplayItemsForm;