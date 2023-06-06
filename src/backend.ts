import PocketBase from 'pocketbase' ;
import type { IAResponse } from './pocketbase-types';
export const pb = new PocketBase('http://193.168.146.83:8090') ;


export async function allIA() {
    const records = await pb.collection('IA').getFullList();
    return records;
}

export async function oneID(id: string) {
    const oneRecord = await pb.collection('IA').getOne(id);
    return oneRecord;
}
