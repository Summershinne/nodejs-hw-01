import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    try {
        const empyContacts = [];
        await fs.writeFile(PATH_DB, JSON.stringify(empyContacts, null, 2));
    } catch (error) {
        console.error('Error removing contacts:', error);
    }
};

removeAllContacts();
