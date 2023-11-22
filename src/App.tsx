import '../src/App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Login } from './components/Login/Login'; 
import { Home } from './components/Home/Home';
import { Welcome } from './components/Welcome/Welcome';
import { Register } from './components/Register/Register';
import { Profile } from './components/Profile/Profile';
import { Report } from './components/Report/Report';
import { Info } from './components/Info/Info';
import { MyMarkers } from './components/Markers/MyMarkers';
import { ConfigProfile } from './components/ConfigProfile/ConfigProfile';
import { About } from './components/About/About';
import { Notification } from './components/Home/Notification';
import { Debates } from './components/Debates/Debates';
import { Markers } from './components/Markers/Markers';
import { EditProfile } from './components/Profile/EditProfile';
import { StatusMarker } from './components/Markers/StatusMarker';

export function App () {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={ <Welcome />} />
      <Route path='/login' element={ <Login />} />
      <Route path='/register' element={ <Register />} />
      <Route path='/home' element={ <Home />} />
      <Route path='/profile' element={ <Profile />} />
      <Route path='/report' element={ <Report />} />
      <Route path='/info' element={ <Info />} />
      <Route path='/mymarkers' element={ < MyMarkers />} />
      <Route path='/config' element={ < ConfigProfile />} />
      <Route path='/about' element={ < About />} />
      <Route path='/notification' element={ < Notification />} />
      <Route path='/debates' element={ < Debates /> } />
      <Route path='/markers' element={ < Markers />} />
      <Route path='/editprofile' element={ < EditProfile />} />
      <Route path='/statusmarker' element={ < StatusMarker />} />
      </Routes>
      </BrowserRouter>
  );
};
