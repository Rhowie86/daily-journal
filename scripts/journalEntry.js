/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="entries">
                <p>
                    ${entry.date}
                </p>
                <p>
                    ${entry.concept}
                </p>
                <p>
                    ${entry.content}
                </p>
                <p>
                    ${entry.mood}
                </p>
            </div>
        </section>
    `
}