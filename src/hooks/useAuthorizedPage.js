import { useHistory } from 'react-router-dom'
import { useLayoutEffect, useState } from 'react'
import { goToLogin } from '../routes/coordinator'
import { useContext } from 'react'
import GlobalContext from '../global/GlobalContext'

const useAuthorizedPage = () => {
    const history = useHistory()
    const [hasAuthorization, setHasAuthorization] = useState(false)
    const { states, requests } = useContext(GlobalContext)

    useLayoutEffect(() => {
        if (!Object.keys(states.userProfile).length) {
            console.log(states.userProfile)
            requests.getProfile()
        }
        if (!Object.keys(states.userProfile).length) {
            console.log(states.userProfile)
            goToLogin(history)
            setHasAuthorization(false)
        } else {
            setHasAuthorization(true)
        }

        // eslint-disable-next-line
    }, [history])

    return hasAuthorization
}

export default useAuthorizedPage