import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Chat from './Chat'
import Contact from './Contact'

const routes = [
  { path: '/',
    exact: true,
    main: Home
  },
  { path: '/chat',
    main: Chat
  },
  { path: '/contact',
    main: Contact
  }
]

const App = () => (
  <Router>
    <div>
      <div>
        <Nav />
      </div>
      <div>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
)

export default App