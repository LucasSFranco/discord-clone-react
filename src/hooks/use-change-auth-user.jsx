import { useDispatch }    from 'react-redux'

import { changeUser } from '@store/user-slice'

export default () => {
  const dispatch = useDispatch()

  return (authUser) => dispatch(changeUser(authUser))
}
