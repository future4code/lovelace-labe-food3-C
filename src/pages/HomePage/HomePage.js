import React from "react"
import useProtectedPage from "../../hooks/useUnprotectedPage";

import {useHistory} from "react-router-dom";
import CardFeed from "../../components/CardFeed/CardFeed";

const HomePage = () => {
    useProtectedPage()
    const history = useHistory()


    return (
        <div>
        <CardFeed />
        <CardFeed /><CardFeed /><CardFeed />
        </div>
    )
}

export default HomePage