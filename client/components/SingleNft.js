import React from "react";
import { connect } from "react-redux";
import{ getSingleNFT} from '../store/nft'

class SingleNft extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getSingleNFT(this.props.match.params.nftid)
        console.log('id:',this.props.match.params.nftid)
    }
    render(){
        return(<div>test</div>);
    }
}
const mapState = (state) => ({
    singleNft: state.singleNft
})
const mapDispatch = (dispatch) => ({
    getSingleNft: (id) => dispatch(getSingleNFT(id))
})
export default connect(mapState, mapDispatch)(SingleNft)