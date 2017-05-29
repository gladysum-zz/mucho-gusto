import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Chat from './Chat'
import Contact from './Contact'
import About from './About'
import FAQS from './FAQS'

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
  },
  { path: '/about',
    main: About
  },
  { path: '/faqs',
    main: FAQS
  }
]

const App = () => (
  <Router>
    <div className="app">
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