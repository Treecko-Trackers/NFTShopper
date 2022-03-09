import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../store/users";
import { Link } from "react-router-dom";


export const Home = () => {
  const dispatch = useDispatch();
  const { id, username, isAdmin} = useSelector((state) => state.auth)

  const nfts = useSelector((state) => state.allNFTs);
  const users = useSelector((state) => state.UserReducer);

  useEffect(() =>{
    dispatch(fetchUsers())
  },[]);

  return isAdmin ? (
    <div>
    <h2>hello Admin {username}</h2>
    <Link to="">Users</Link>
    <Link to="">Nfts</Link>
    <Link to=""></Link>
    </div>
  ):(
    <>
    <h2>Hello, {username}</h2>
    </>
  );
};


export default Home;
