import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/main/main';
import Login from '../pages/login/login';
import Offer from '../pages/offer/offer';
import Favorites from '../pages/favorites/favorites';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import {PlacesCount} from '../pages/main/main';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../../constants';

const App = ({placesCount}:PlacesCount) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<Main placesCount = {placesCount}/>} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} ><Favorites /></PrivateRoute>} />
      <Route path={AppRoute.Offer} element={<Offer />} />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
