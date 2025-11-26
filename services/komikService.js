async function createKomik(database, komikData) {
    const {judul, description, author, imageType, imageName, imageData} = komikData;

    if (!judul || !description || !author) {

        throw new Error('judul, description, and author wajib diisi!.');
    }

    const newKomik = await database.Komik.create({
        judul,
        description,
        author,
        imageType: imageType || null,
        imageName: imageName || null,
        imageData: imageData || null
    });

    return newKomik;
}

async function getAllKomik(database) {
    const komiks = await database.Komik.findAll();

    return komiks.map(k => {
        if (k.imageData) {
            k.imageData = k.imageData.toString('base64');
        }
        return k;
    });
}

async function getKomikById(database, id) {
    const komik = await database.Komik.findByPk(id);
    if (!komik) throw new Error('Komik tidak ditemukan!');

    if (komik.imageData) {
        komik.imageData = komik.imageData.toString('base64');
    }

    return komik;
}

async function updateKomik(database, id, komikData) {
    const komik = await database.Komik.findByPk(id);
    if (!komik) {
        throw new Error('Komik tidak ditemukan!');
    }

    await komik.update(komikData);
    return komik;
}

async function deleteKomik(database, id) {
    const komik = await database.Komik.findByPk(id);
    if (!komik) {
        throw new Error('Komik dengan ID ${id} tidak ditemukan!');
    }

    await komik.destroy();
    return { message: 'Komik dengan ID ${id} telah dihapus.' };
}

module.exports = {
    createKomik,
    getAllKomik,
    getKomikById,
    updateKomik,
    deleteKomik
};