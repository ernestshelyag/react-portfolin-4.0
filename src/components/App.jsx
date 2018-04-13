import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Contacts from './contacts/Contacts'
import Admin from './admin/Admin'
import Error from './Error'

// - - - - -

const main     = () => ( <main className = "App__main"> <Home/>      </main> );
const about    = () => ( <main className = "App__main"> <About/>     </main> );
const contacts = () => ( <main className = "App__main"> <Contacts/> </main> );
const admin    = () => ( <main className = "App__main"> <Admin/>     </main> );
const error    = () => ( <main className = "App__main"> <Error/>     </main> );

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className = "App">

          <header className = "App__header">
            <div className = "wrp">
              <nav className = "App__nav">
                <Link to = '/'>         Главная  </Link>
                <Link to = '/about'>    Обо мне  </Link>
                <Link to = '/contacts'> Контакты </Link>
              </nav>
              <a href="https://github.com/ernestshelyag"> <i className="fab fa-github fa-lg"></i> </a>
            </div>
          </header>

          <Switch>
            <Route exact path = '/'         component = { main }     />
            <Route       path = '/about'    component = { about }    />
            <Route       path = '/contacts' component = { contacts } />
            <Route       path = '/admin'    component = { admin }    />
            <Route       path = '/error'    component = { error }    />

            <Redirect from = '*' to = '/error' />
          </Switch>

          <footer className = "App__footer">
            <div className = "wrp">
              <span> © 2018 Эрнест Шеляг </span>
              {/*<Link to = '/admin'> for admin </Link>*/}
              <a href="tel:+79021390379">+7(902)139-03-79</a>
            </div>
          </footer>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
