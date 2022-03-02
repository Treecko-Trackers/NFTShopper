import React, { useState, useEffect } from 'react';
import { fetchFTs } from '../store/nft';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class AllNFTs extends React.Component {
  constructor(props) {
    super(props);
  }
  // const dispatch = useDispatch();
  // const [AllFTs, setAllFTs] = useState([]);
  // const { FTs } = useSelector((state) => ({ FTs: state.FTs }));

  // useEffect(() => {
  //   props.fetchFTs();
  //   if (props.allFTs) setAllFTs(...props.allFTs);
  //   console.log('props', props.allFTs);
  // }, []);
  componentDidMount() {
    this.props.fetchFTs();
  }
  render() {
    return this.props.allFTs ? (
      <div>
        {this.props.allFTs.map((item) => (
            <Link to={`/NFTs/${item.id}`}>
            <div key={item.id}>
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
    allFTs: state.allFTs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFTs: () => dispatch(fetchFTs()),
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
