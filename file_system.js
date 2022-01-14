
const fs = require ('fs')

fs.writeFileSync('./productos.txt', '[]')

let idgenerator= 1

class Contenedor {

    constructor(title, price, thumbnail) {
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
        this.id = idgenerator;

    }   

    save() {

        const datosArchivo = JSON.parse(fs.readFileSync('./productos.txt'))
        datosArchivo.push(new Contenedor(this.title, this.price, this.thumbnail))
        fs.writeFileSync('./productos.txt', JSON.stringify(datosArchivo, null, 2));

        idgenerator++    

    }

   

}


async function getById(id) {
    try {
        const datosArchivo = await JSON.parse(fs.readFileSync('./productos.txt'))
        console.log(datosArchivo.find(archivo => archivo.id === id))
    } catch (err){
        console.log(null)
    }
}

async function getAll () {
    try {
        const datosArchivo = await JSON.parse(fs.readFileSync('./productos.txt'))
        console.log(datosArchivo)
    } catch (err){
        console.log(null)
    }
}




async function deleteById(id) {
    try {
        const datosArchivo = await JSON.parse(fs.readFileSync('./productos.txt'))
        const idsADejar = arrayRemove(datosArchivo, id);
        fs.writeFileSync('./productos.txt', JSON.stringify(idsADejar, null, 2));

    } catch (err){
        console.log(err)
    }
   
}

async function deleteAll() {
    try {
       
        fs.writeFileSync('./productos.txt', '[]');

    } catch (err){
        console.log(err)
    }
   
}

function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele.id != value; 
    });
}






const libro1 = new Contenedor('Harry Potter', 5990, 'https://www.amazon.com/-/es/J-K-Rowling/dp/0545162076/ref=sr_1_9?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=17AK36MMQM4ZR&keywords=harry+potter&qid=1641904585&sprefix=harry+potte%2Caps%2C207&sr=8-9');
const libro2 = new Contenedor('La sospecha de sofia', 8990, 'https://www.amazon.com/-/es/Paloma-S%C3%A1nchez-Garnica-ebook/dp/B07NBX3LYZ/ref=sr_1_1?keywords=la+sospecha+de+sofia&qid=1641904626&sprefix=la+sos%2Caps%2C185&sr=8-1')
const libro3 = new Contenedor('La cautiva del highlander', 7990, 'https://www.amazon.com/dp/B0949R8H3Q/ref=sspa_dk_detail_3?psc=1p13NParams&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFKUDNGMlZERkRCR0gmZW5jcnlwdGVkSWQ9QTA5NzMzNDYxMFVMR0RUQVBBVVRaJmVuY3J5cHRlZEFkSWQ9QTA3OTY2NjIzVDBCUUUzTEQzR1gyJndpZGdldE5hbWU9c3BfZGV0YWlsMiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=')


//libro1.save()
//libro2.save()
//libro3.save()



