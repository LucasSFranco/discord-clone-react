import { lazy, Suspense }                     from 'react'
import { Switch }                             from 'react-router-dom'

import { GuestRoute, ProtectedRoute }         from '@helpers'
import { useAuthUser, useOnAuthStateChanged } from '@hooks'

import PageLoader from '@pages/page-loader'

const Home =     lazy(() => import('@pages/home'))
const Login =    lazy(() => import('@pages/login'))
const Register = lazy(() => import('@pages/register'))

const Routes = () => {
  const authUser = useAuthUser()

  const loading = useOnAuthStateChanged()

  return (
    <Suspense fallback={ <PageLoader /> }>
      {
        loading ? (
          <PageLoader />
        ) : (
            <Switch>
              <ProtectedRoute path='/channels/@me/:dmId?' authUser={authUser}>
                <Home />
              </ProtectedRoute>
              <GuestRoute path='/register' exact authUser={authUser}>
                <Register />
              </GuestRoute>
              <GuestRoute path='/' exact authUser={authUser}>
                <Login />
              </GuestRoute>
            </Switch>
        )
      }
    </Suspense>
  )
}

export default Routes
