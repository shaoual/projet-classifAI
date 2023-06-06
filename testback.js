import { allIA } from './backend.mjs';

import { oneID } from './backend.mjs';
try {
    const records = await allIA();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const onerecord = await oneID('jg0hgprjpo20sjr');
    console.table(onerecord);
} catch (e) {
    console.error(e);
}