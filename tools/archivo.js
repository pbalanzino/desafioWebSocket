import fs from 'fs';

class Archivo{
    constructor(fileName){
        this.fileName = fileName;
    }
    
    async leer(){
        try {
            if(!fs.existsSync(this.fileName)) await fs.promises.writeFile(this.fileName, '[]');
            let file = await fs.promises.readFile(this.fileName, 'utf-8');
            return file;
        } catch (err){
            console.log(`La ruta del archivo no coincide. ${err}`);
        }
    }

    async guardar(product){
        try{
            let file = await fs.promises.readFile(this.fileName, 'utf-8',);
            let fileParsed = JSON.parse(file);
            const content = {
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
                id: fileParsed.length + 1
               }
            fileParsed.push(content);
            await fs.promises.writeFile(this.fileName, JSON.stringify(fileParsed,null,'\t'));
        }catch (err){
            console.log(`No se pudo guardar el archivo: ${err}`);
        }
    }

    async borrar(){
        try{
            await fs.promises.unlink(this.fileName);
        } catch (err) {
            console.log(`No se pudo borrar el archivo. ${err}`);
        }
    }
};

export default Archivo;