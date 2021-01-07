/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const eventHub = document.querySelector(".container")

export const JournalEntryComponent = (entryObj) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
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
                    ${entry.mood.label}
                </p>
            </div>
        </section>
    `
}