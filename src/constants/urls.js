export const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net"

export const HEADERS = {
    headers: {
        Auth: localStorage.getItem("token")
    }
}