import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
  from "../services/auth-thunks";
import "./index.css";

function ProfileScreen() {
 const { currentUser } = useSelector((state) => state.user);
 var [ profile, setProfile ] = useState(currentUser);
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const save = async () => { 
    await dispatch(updateUserThunk(profile)); 
};
//  useEffect(() => {
//      async function fetchData() {
//      const {payload} = await dispatch(profileThunk());
//      setProfile(payload);
//      }
//      fetchData();
//       },[]);

useEffect(  () => {
    dispatch(profileThunk())

}, []);
console.log("profile" , profile)
 return (
    <div>
     <h1>Profile Screen</h1>
     {profile && (<div>
       <div>
        <label class = "f-Name">First Name</label>
        <input type="text" value={profile.firstName}
         onChange={(event) => {
          const newProfile = {
           ...profile, firstName: event.target.value,
          };
          setProfile(newProfile);
         }}/>
       </div>
       <div>
        <label class = "f-Name">Last Name</label>
        <input type="text" value={profile.lastName}
         onChange={(event) => {
          const newProfile = {
           ...profile, lastName: event.target.value,
          };
          setProfile(newProfile);
         }}/>
       </div></div>
     )}
     <button class = "l-button"
      onClick={() => {
        dispatch(logoutThunk());
        navigate("/tuiter/login");
      }}>                   Logout</button>
     <button class = "r-button" onClick={save}>Save  </button>
    </div> );
}
export default ProfileScreen;