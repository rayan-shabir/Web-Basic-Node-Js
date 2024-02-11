// Ecma Script Modules --> Importing File
// Method # 01 --> when no default exporting is set
import {simple2 as simplicity} from './ecma_Script_modules-02.mjs'

// Method # 02 --> when default exporting is set
import simple from './ecma_Script_modules-02.mjs'

// Method # 02 --> Exporting more than 1 elements
import {simple2, simple3} from './ecma_Script_modules-02.mjs'

// Method # 01
console.log(simplicity());

// Method # 02
console.log(simple());

// Method # 03
console.log(simple2());
console.log(simple3());