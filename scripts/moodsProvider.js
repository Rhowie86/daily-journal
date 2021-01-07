let moods = []

export const useMoods = () => {
    return moods.slice()
}

export const getMoods = () => {
    return fetch("https://localhost:8088/moods")
        .then(response => response.json())
        .then(
            parsedMoods => {
                moods = parsedMoods
            }
        )
}