const { Komik } = require('../models'); 

async function createKomik(database, komikData) {
    const { judul, deskripsi, penulis, imageType, imageName, imageData } = komikData;

    if (!judul || !deskripsi || !penulis) {
        throw new Error('Judul, deskripsi, dan penulis wajib diisi!');
    }

    const newKomik = await database.Komik.create({
        judul,
        deskripsi,
        penulis,
        imageType: imageType || null,
        imageName: imageName || null,
        imageData: imageData || null
    });


    const result = newKomik.toJSON();
    
    if (result.imageData) {
        result.imageData = "Image uploaded successfully (Base64 hidden)";
    }
    
    return result;
}

async function getAllKomik(database) {
    const komiks = await database.Komik.findAll();

    return komiks.map(k => {
        const komikJSON = k.toJSON();
        
        if (komikJSON.imageData) {
            komikJSON.imageData = `data:${komikJSON.imageType};base64,${komikJSON.imageData.toString('base64')}`;
        }
        return komikJSON;
    });
}

async function getKomikById(database, id) {
    const komik = await database.Komik.findByPk(id);
    if (!komik) throw new Error('Komik tidak ditemukan!');

    const komikJSON = komik.toJSON();

    if (komikJSON.imageData) {
        komikJSON.imageData = `data:${komikJSON.imageType};base64,${komikJSON.imageData.toString('base64')}`;
    }

    return komikJSON;
}

async function updateKomik(database, id, komikData) {
    const komik = await database.Komik.findByPk(id);
    if (!komik) {
        throw new Error('Komik tidak ditemukan!');
    }

    await komik.update(komikData);
    
    const result = komik.toJSON();
    if (result.imageData) {
        result.imageData = "Image updated successfully";
    }
    
    return result;
}

async function deleteKomik(database, id) {
    const komik = await database.Komik.findByPk(id);
    if (!komik) {
        throw new Error(`Komik dengan ID ${id} tidak ditemukan!`);
    }

    await komik.destroy();
    return { message: `Komik dengan ID ${id} telah dihapus.` };
}

module.exports = {
    createKomik,
    getAllKomik,
    getKomikById,
    updateKomik,
    deleteKomik
};