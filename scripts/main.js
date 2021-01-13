import { EntryListComponent } from "./journalEntryList.js";
import { journalForm } from "./journalForm.js";
import { getMoods } from "./moodsProvider.js"
// import { getEntries } from "./journalDataProvider.js"
getMoods()
.then(EntryListComponent)
.then(journalForm)
