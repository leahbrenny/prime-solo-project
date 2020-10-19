import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PlantsPage from '../PlantsPage/PlantsPage';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import './App.css';
import RoomsPage from '../RoomsPage/RoomsPage';
import SearchPage from '../SearchPage/SearchPage';
import NewRoomPage from '../NewRoomPage/NewRoomPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from='/' to='/home' />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path='/about'
              component={AboutPage}
            />

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path='/user'
              component={UserPage}
            />

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path='/rooms'
              component={RoomsPage}
            />

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path='/favorites'
              component={FavoritesPage}
            />

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path='/plants'
              component={PlantsPage}
            />

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path='/search'
              component={SearchPage}
            />

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path='/login'
              component={LoginPage}
              authRedirect='/user'
            />
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path='/registration'
              component={RegisterPage}
              authRedirect='/user'
            />
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path='/home'
              component={LandingPage}
              authRedirect='/user'
            />

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path='/newroom'
              component={NewRoomPage}
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
