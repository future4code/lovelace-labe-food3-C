export const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/"

export const HEADERS = {
    headers: {
        Authorization: localStorage.getItem("token")
    }
}