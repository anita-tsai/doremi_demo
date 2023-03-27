import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  //Link
} from "react-router-dom";
import React from 'react';

import Menu from './Components/Menu';
import HomePage from './Components/HomePage';
import GoogleLogin from './Components/GoogleLogin';
import FacebookLogin from './Components/FacebookLogin';
import UserPage from './Components/UserPage'
import CreateRoom from './Components/CreateRoom';
import EditRoom from './Components/EditRoom';
import DeleteRoom from './Components/DeleteRoom';
import Interaction from './Components/Interaction';
import TextSearch from './Components/TextSearch';
import CategorySearch from './Components/CategorySearch';
import TagSearch from './Components/TagSearch';
import Blacklist from './Components/Blacklist';
import SubmitBlacklist from './Components/SubmitBlacklist';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          {/* <Route element={<Menu />}> */}
            <Route index element={<HomePage />} />
            <Route path="/createroom" element={<CreateRoom />} />
            <Route path="/googleLogin" element={<GoogleLogin />} />
            <Route path="/facebookLogin" element={<FacebookLogin />} />
            <Route path="/userPage" element={<UserPage />} />
            <Route path="/createRoom" element={<CreateRoom />} />
            <Route path="/editRoom" element={<EditRoom />} />
            <Route path="/deleteRoom" element={<DeleteRoom />} />
            <Route path="/interaction" element={<Interaction />} />
            <Route path="/textSearch" element={<TextSearch />} />
            <Route path="/categorySearch" element={<CategorySearch />} />
            <Route path="/tagSearch" element={<TagSearch />} />
            <Route path="/blacklist" element={<Blacklist />} />
            <Route path="/submitblacklist" element={<SubmitBlacklist />} />
            <Route path="/*" element={<HomePage />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
