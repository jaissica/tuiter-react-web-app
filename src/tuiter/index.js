import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen"
import ExploreScreen from "./explore-screen"
import BookmarksScreen from "./bookmarks-screen"
import ProfileScreen from "./profile-screen"
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import TuitSummaryItem from "./tuit-summary-list/tuit-summary-item"
import TuitSummaryList from "./tuit-summary-list"
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer, 
    tuits: tuitsReducer}});

function Tuiter() {
  return (
   <Provider store={store}>
    <div>
      <Nav />
      <div className="row">
        <div className="col-2 col-lg-2 col-xl-2 col-xxl-2 col-sm-2">
          <NavigationSidebar />
        </div>
        <div className="text-lg-start col-10 col-lg-7 col-xl-6 col-xxl-6">
          <Routes>
             <Route path="/home" element={<HomeScreen />} />
             <Route path="/explore" element={<ExploreScreen />} />
             <Route path="/bookmarks" element={<BookmarksScreen />} />
             <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </div>
        <div className="col-lg-3 col-xl-3 col-xxl-3 ps-4 d-none d-lg-block">
          <WhoToFollowList />
       </div>
      </div>
    </div>
    </Provider>
  );
 }
 export default Tuiter;