import PocketBase from 'pocketbase' ;

var pocketbase_ip=''
if(import.meta.env.MODE === 'production')
pocketbase_ip= 'http://193.168.146.83:80'
else
pocketbase_ip='http://127.0.0.1:8090'

const pb = new PocketBase (pocketbase_ip)
export async function allIA() {
    const records = await pb.collection('IA').getFullList();
    return records;
}

export async function oneID(id) {
    const oneRecord = await pb.collection('IA').getOne(id);
    return oneRecord;
}