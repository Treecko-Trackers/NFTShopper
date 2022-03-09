import React, { useState, useEffect } from "react";
//import { connect } from "react-redux";
import { getSingleNFT, resetItem } from "../store/singleNft";
import { useDispatch, useSelector } from "react-redux";

function SingleNft(props){
  const  NFT  = useSelector(state => state.singleNFT);
  
  const {isAdmin } = useSelector(state => state.auth)
  //const [AllFTs, setAllFTs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleNFT(props.match.params.nftid));
  }, []);
    return NFT ? (
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <img src={NFT.imageUrl} style={{ maxWidth: "400px" }} />
        <h1>{NFT.name}</h1>
        <h3>{NFT.artist}</h3>
        <p>${NFT.price}</p>
        <p>Quantity: {NFT.quantity}</p>
        {!isAdmin? null : (
                <>
                  <button>edit</button>
                  <button>delete</button>
                </>
              )}
      </div>
    ) : (
      "loading"
    );
  }


export default SingleNft
