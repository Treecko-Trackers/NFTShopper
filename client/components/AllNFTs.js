import React, { useState, useEffect } from 'react';
import { fetchNFTs } from '../store/nft';
import { createOrder, gotOrder } from '../store/order';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class AllNFTs extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchNFTs();
    console.log(this.props.userId);
    // if (!('Cart' in localStorage)) {
    //   localStorage.setItem('Cart', JSON.stringify({}));
    //   this.props.createOrder(this.props.userId);
    // }
    if (this.props.gotOrder(this.props.userId)) {
      this.props.createOrder(this.props.userId);
    }
    // else {
    //   this.props.gotOrder(this.props.userId);
    // }
    // console.log('id', this.props.userId);
    // console.log('order', this.props.gotOrder(this.props.userId));
  }
  render() {
    return this.props.allNFTs ? (
      <div>
        {this.props.allNFTs.map((item) => (
          <Link key={item.id} to={`/NFTs/${item.id}`}>
            <div>
              <h1>{item.name}</h1>
              <img
                src={item.imageUrl}
                style={{ width: '200px', height: '200px' }}
              />
              <h2>${item.price}</h2>
            </div>
          </Link>
        ))}
      </div>
    ) : (
      <div>{'loading'}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allNFTs: state.allNFTs,
    userId: state.auth.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNFTs: () => dispatch(fetchNFTs()),
    createOrder: (userId) => dispatch(createOrder(userId)),
    gotOrder: (userId) => dispatch(gotOrder(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllNFTs);

// const AllNFTs = (props) => {
//   const dispatch = useDispatch();
//   const [AllFTs, setAllFTs] = useState([]);
//   // const { FTs } = useSelector((state) => ({ FTs: state.FTs }));
//   // const allFTs = useSelector(state => state.allFTs)
//   useEffect(() => {
//     dispatch(fetchFTs());
//     setAllFTs(AllFTs);
//     console.log('props', props);
//   }, []);

//   return AllFTs ? (
//     <div>
//       {AllFTs.map((item) => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//     </div>
//   ) : (
//     <div>{'loading'}</div>
//   );
// };

// export default AllNFTs;
