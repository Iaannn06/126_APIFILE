module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define('Komik', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    judul: {
      type: DataTypes.STRING,
      allowNull: false
    },
    penulis: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    imageType: {
      type: DataTypes.STRING
    },
    imageName: {
      type: DataTypes.STRING
    },
    imageData: {
      type: DataTypes.BLOB('long')
    }

  }, {
    tableName: 'Komik',
  });

  return Komik;
};
