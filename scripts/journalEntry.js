/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const eventHub = document.querySelector(".container")

export const JournalEntryComponent = (entryObj) => {
    return `
        <section id="entry--${entryObj.id}" class="journalEntry">
            <div class="entries">
                <p>
                    ${entryObj.date}
                </p>
                <p>
                    ${entryObj.concept}
                </p>
                <p>
                    ${entryObj.content}
                </p>
                <p>
                    ${entryObj.mood.label}
                </p>
                <button type="submit" class="button-delete" id="deleteEntry--${entryObj.id}">Delete Journal Entry</button>
            </div>
        </section>
    `
}