/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./journalDataProvider.js"
import { JournalEntryComponent } from "./journalEntry.js"

const eventHub = document.querySelector(".container")
// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    entries.map(
        entry => { 
        const entryHTML = JournalEntryComponent(entry)
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        entryLog.innerHTML += entryHTML
    } )
}