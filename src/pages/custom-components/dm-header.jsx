import { Self } from './styles/dm-header'
import { useSelector } from 'react-redux'
import { selectDM } from '@store/dm-slice'

import {
  Header,
  Strong,
} from '@components'

import {
  At,
} from '@assets'

function DMHeader() {
  const selectedDM = useSelector(selectDM)

  return (
    <Self as={Header}>
      <Header.Container>
        <At />
        <Strong> {selectedDM?.username} </Strong>
      </Header.Container>
    </Self>
  )
}

export default DMHeader
