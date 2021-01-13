import { saveEntry, deleteEntry } from "./journalDataProvider.js"
import { getMoods, useMoods } from "./moodsProvider.js"

const contentTarget = document.querySelector(".journal-form");
const eventHub = document.querySelector(".container")





export const journalForm = () => {
    const allMoods = useMoods()
    console.log(allMoods)
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
    ${
        allMoods.map(
            (mood) => {
                return `<option value="${ mood.id }">${ mood.label }</option>`
            }
        ).join("")
    }
        </select>
    <button type="submit" class="button-record" id="saveEntry">Record Journal Entry</button>
    
</fieldset>`;
};

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry"){

        let date = document.getElementById("journalDate")
        let concept = document.getElementById("conceptsCovered")
        let content = document.getElementById("journalEntry")
        let mood = document.getElementById("mood")

        if (date.value && concept.value && content.value && mood.value !== "") {
            const newEntry = {
                date: date.value,
                concept: concept.value,
                content: content.value,
                moodId: mood.value
            }
            saveEntry(newEntry)
            date.value = ""
            concept.value = ""
            content.value = ""
            mood.value = ""
        }
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, entryId] = clickEvent.target.id.split("--")
        
       deleteEntry(entryId)
    }
  })
