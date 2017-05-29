import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import Chat from './Chat'
import Contact from './Contact'
import Team from './Team'
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
  { path: '/team',
    main: Team
  },
  { path: '/faqs',
    main: FAQS
  }
]

const App = () => (
  <Router>
    <div className="app">

        <Nav />

        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}

        <Footer />

    </div>
  </Router>
)

export default App