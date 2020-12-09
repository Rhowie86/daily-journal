import { saveEntry } from "./journalDataProvider.js"

const contentTarget = document.querySelector(".journal-form");
const eventHub = document.querySelector(".container")

export const journalForm = () => {
  contentTarget.innerHTML = `<h2>Daily Journal</h2>
       <fieldset class="form">
    <label for="journalDate">Date of entry</label>
    <input type="date" name="jouralDate" class="date-field" id="journalDate">
    <label for="conceptsCovered">Concepts Covered</label>
    <input type="text" name="conceptsCovered" class="concepts-field" id="conceptsCovered">
    <label for="journalEntry">Journal Entry</label>
    <textarea class="journal-entry" name="journalEntry" id="journalEntry" rows="10"></textarea>
    <label for="moodSelector">Mood:</label>
    <select name="mood" class="mood-selector" id="mood">
        <option value="Happy/Excited">Happy/Excited</option>
        <option value="Meh...it's fine.">Meh...it's fine.</option>
        <option value="Starting to worry...">Starting to worry...</option>
        <option value="I hate this...">I hate this...</option>
        <option value="This is hell...I live here now">This is hell...I live here now.</option></select>
    <button type="submit" class="button-record" id="saveEntry">Record Journal Entry</button>
</fieldset>`;
};

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry"){

        let date = document.getElementById("journalDate")
        let concepts = document.getElementById("conceptsCovered")
        let entry = document.getElementById("journalEntry")
        let mood = document.getElementById("mood")

        if (date.value && concepts.value && entry.value && mood.value !== "") {
            const newEntry = {
                date: date.value,
                concepts: concepts.value,
                entry: entry.value,
                mood: mood.value
            }
            saveEntry(newEntry)
            date.value = ""
            concepts.value = ""
            entry.value = ""
            mood.value = ""
        }
    }
})
