import React, { useState, useEffect } from 'react';
import { fetchNFTs } from '../store/nft';
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
    this.props.fetchNFTs();
  }
  render() {
    const isAdmin = this.props.isAdmin;
    //const { isAdmin } = useSelector(state => state.auth);
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
              {isAdmin ? (
                <>
                  <button>edit</button>
                  <button>delete</button>
                </>
              ) : null}
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
    isAdmin: state.auth.isAdmin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNFTs: () => dispatch(fetchNFTs()),
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
