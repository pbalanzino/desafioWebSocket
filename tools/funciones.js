import Archivo from './archivo.js';
import idGen from './idGenerator.js'
const manager = new Archivo('../data/productos.txt');

const itemsArray = async() => {
    try{
        let file = await manager.leer();
        let fileParsed = JSON.parse(file)
        return fileParsed.map(item => item.title);
    } catch(err) {
        return `Error: ${err}`
    }
}

const itemId = async() => {
    try{
        let file = await manager.leer();
        let fileParsed = JSON.parse(file);
        fileParsed.forEach(element => element.id = idGen.next().value)
        return fileParsed;
    }catch (err){
        return `Error: ${err}`
    }
}

itemId()

export { itemsArray };