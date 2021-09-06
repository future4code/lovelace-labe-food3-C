export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/signup")
}

export const goToHome = (history) => {
    history.push("/home")
}

export const goToRestaurantDetail = (history, id) => {
    history.push(`/restaurant/${id}`)
}

export const goToProfile = (history) => {
    history.push("/profile")
}

export const goToAdress = (history) => {
    history.push("/profile/adress")
}

export const goToUserInfo = (history) => {
    history.push("/profile/info")
}