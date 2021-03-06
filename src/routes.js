import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Welcome from './components/welcome';
import BioContainer from './containers/profiles/bioContainer';
import AdminContainer from './containers/admin/adminContainer';
import Bot from './components/bot';
import RequireAuth from './containers/require-auth';
import SignIn from './containers/signin';
import SignUp from './containers/signup';
import UpdateContainer from './containers/admin/updateContainer';
import UpdateBio from './containers/admin/adminComponents/updateBio';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="profiles" component={BioContainer} />
    <Route path="admin" component={RequireAuth(AdminContainer)}>
      <Route path="update" component={UpdateContainer} />
      <Route path="bios/:id" component={UpdateBio} />
    </Route>
    <Route path="signin" component={SignIn} />
    <Route path="signup" component={SignUp} />
    <Route path="bot" component={Bot} />
  </Route>
);
