import { Redirect, Route } from 'react-router-dom'

export default ({ authUser, children, ...otherProps }) => {
  return(
    <Route {...otherProps}
      render={
        () => {
          if(authUser)
            return children
          if(!authUser)
            return <Redirect to='/' />
        }
      }
    />
  )
}
