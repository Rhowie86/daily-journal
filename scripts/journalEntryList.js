/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./journalDataProvider.js";
import { JournalEntryComponent } from "./journalEntry.js";
import { getEntries } from "./journalDataProvider.js";
import { getMoods, useMoods } from "./moodsProvider.js"


const eventHub = document.querySelector(".container");
// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog");

eventHub.addEventListener("journalStateChanged", (customEvent) => {
  console.log("listener");
  EntryListComponent();
});

let journalEntries = []
let allMoods = []

export const EntryListComponent = () => {
  // Use the journal entry data from the data provider component
  getEntries()
  .then(getMoods)
  .then(() => {
    journalEntries = useJournalEntries();
    allMoods = useMoods()
    console.log(allMoods)
    

    render(journalEntries, allMoods);
  });
};
const render = (entries, mood) => {
  
  if (entries.length > 0) {
    entryLog.innerHTML = entries
      .map((entry) => JournalEntryComponent(entry, mood))
      .join("");
    
  }
};

