import { useSelector } from 'react-redux'
import { selectUser } from '@store/user-slice'

export default () => useSelector(selectUser)
