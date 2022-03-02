import React from "react";
import { connect } from "react-redux";
import { getSingleNFT } from "../store/nft";

class SingleNft extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSingleNft(this.props.match.params.nftid);
    console.log(this.props.singleNft);
    console.log("id:", this.props.match.params.nftid);
  }
  render() {
    return this.props.singleNft ? (
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
        <img
          src={this.props.singleNft.imageUrl}
          style={{ maxWidth: "400px" }}
        />
        <h1>{this.props.singleNft.name}</h1>
        <h3>{this.props.singleNft.artist}</h3>
        <p>${this.props.singleNft.price}</p>
        <p>Quantity: {this.props.singleNft.quantity}</p>
      </div>
    ) : (
      "loading"
    );
  }
}
const mapState = (state) => ({
  singleNft: state.allNFTs,
});
const mapDispatch = (dispatch) => ({
  getSingleNft: (id) => dispatch(getSingleNFT(id)),
});
export default connect(mapState, mapDispatch)(SingleNft);
