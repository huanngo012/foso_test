import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes/Routes'
import { Fragment } from 'react/jsx-runtime'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          const Page = route.component
          let LayoutTag

          if (route.layout) {
            LayoutTag = MainLayout
          } else {
            LayoutTag = Fragment
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <LayoutTag>
                  <Page />
                </LayoutTag>
              }
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
