const contentTarget = document.querySelector(".journal-form");

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
    }
})