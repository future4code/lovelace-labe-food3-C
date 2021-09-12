import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToLogin } from '../routes/coordinator'
import { useContext } from 'react'
import GlobalContext from '../global/GlobalContext'
import { useState } from 'react'
import { useEffect } from 'react'

const useProtectedPage = () => {
  const history = useHistory()
  const { states, requests } = useContext(GlobalContext)
  const [hasAuthorization, setHasAuthorization] = useState(null)


  useLayoutEffect(() => {
    const token = localStorage.getItem('token')

    if (!token){
      goToLogin(history)
    }
    else if (!Object.keys(states.userProfile).length) {
      requests.getProfile()
  }

  // eslint-disable-next-line
  }, [history])


  useEffect(() => {
    if (states.userProfile.hasAddress) {
      setHasAuthorization(true)
    }
    else {
      setHasAuthorization(false)
    }


  }, [states.userProfile])


  return hasAuthorization
}

export default useProtectedPage
