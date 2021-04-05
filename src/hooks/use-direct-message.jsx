import { useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory()
  return (userId) => history.push(`/channels/@me/${userId}`)
}
