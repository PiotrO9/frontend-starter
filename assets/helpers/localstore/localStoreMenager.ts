import type { JSONValue, StoredValue } from './lolcalStoreTypes';

export class LocalStorageManager {
    static setItem(key: string, value: JSONValue): void {
        try {
            const stringValue = JSON.stringify(value);

            localStorage.setItem(key, stringValue);
        }
        catch (error) {
            console.error('Error saving to LocalStorage:', error);
        }
    }

    static getItem<T extends JSONValue>(key: string): T | null {
        try {
            const item = localStorage.getItem(key);

            return item ? (JSON.parse(item) as T) : null;
        }
        catch (error) {
            console.error('Error reading from LocalStorage:', error);

            return null;
        }
    }

    static removeItem(key: string): void {
        try {
            localStorage.removeItem(key);
        }
        catch (error) {
            console.error('Error removing item from LocalStorage:', error);
        }
    }

    static clear(): void {
        try {
            localStorage.clear();
        }
        catch (error) {
            console.error('Error clearing LocalStorage:', error);
        }
    }
}
