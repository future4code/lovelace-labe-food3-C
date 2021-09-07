export default function categorizeRestaurants( restaurants ){
    let categorizedRestaurants = {}
    let restaurantTypes = []

    restaurants.forEach(restaurant => {
        const category = restaurant.category

        if(!restaurantTypes.includes(category)){
            restaurantTypes.push(category)
            categorizedRestaurants[category] = []
        }

        categorizedRestaurants[category] = [...categorizedRestaurants[category], restaurant]
    });

    return categorizedRestaurants
}