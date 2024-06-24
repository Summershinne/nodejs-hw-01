import { log } from 'console';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const constants = JSON.parse(data);
        if (constants.length > 0) {
            constants.pop();
            await fs.writeFile(PATH_DB, JSON.stringify(constants, null, 2));
        console.log('The Last contact has been remove!');
        } else { console.log('No contacts to remove.'); }
} catch (error) {
    console.error('Error removing the last contact:', error)
}};

removeLastContact();
