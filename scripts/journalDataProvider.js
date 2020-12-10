/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const eventHub = document.querySelector(".container")

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedEntries => { 
            entries = parsedEntries
            // What should happen when we finally have the array?
        })
}

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

// Use `fetch` with the POST method to add your entry to your API
export const saveEntry = (newEntry) => {
fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newEntry)
})
    .then(getEntries())  // <-- Get all journal entries
    .then(dispatchStateChangeEvent()) } // <-- Broadcast the state change event


// const journal = [
//     {
//         id: 1,
//         date: "07/24/2025",
//         concept: "HTML & CSS",
//         content: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
//         mood: "Ok"
//     }
// ]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
let entries = []

export const useJournalEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}