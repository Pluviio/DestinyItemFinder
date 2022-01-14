import { useState, useEffect } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from "../utils/AxiosWithAuth";


const DisplayItemsForm = () => {

  const [ item, setItem ] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get('/Destiny2/Armory/Search/DestinyInventoryItemDefinition/the-last-word/')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  })

  return (

    <div>
      Items Here
    </div>
  )
}

export default DisplayItemsForm;