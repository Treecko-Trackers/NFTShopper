import React, {useState, useEffect} from 'react';
import { fetchFTs } from '../store/nft';
import { useDispatch, useSelector } from 'react-redux';

const AllNFTs = () => {
const dispatch = useDispatch()
const [FTs, setFTs] = useState([])
const AllFTs = useSelector(state => state.FTs)

useEffect(() => {
  dispatch(fetchFTs())
}, [])

useEffect(() => {
  async function getAllFTs() {
    try {
      const {data} = await axios.get('/nft')
      setFTs(data)
    } catch (error) {
      console.log(error)
    }
  }
  getAllFTs()
},[])

  return (
      {FT.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
  );
};

export default AllNFTs;
