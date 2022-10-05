const { response } = require('express');
const {v4:uuidV4} = require('uuid');
const uploadImage = require('../helpers/uploadImage');
const Vehicle = require('../models/Vehicles');


const getVehicles = async(rq = request, rs = response) => {
    const vehicles = await Vehicle.findAll()
    return rs.json({
        message: "ok", 
        data: vehicles
    })
}

const createVehicles = async(rq = request, rs = response) => {
    const image = rq.files.image.tempFilePath;
    const result = await uploadImage(image);
    const body = rq.body;
    body.imagen = result.url
    body.id_publico_imagen = result.public_id
    await Vehicle.create(body);
    return rs.status(200).send('<script>window.location.href="http://localhost:3000/create-vehicles"</script>');
}

const updateVehicles = async(rq = request, rs = response) => {
    
}

// const searchSongs = async (rq = request, rs = response) => {
//     let songs;
//     const collection = rq.params.collection;
//     const value = await rq.params.value;
//     const regex = new RegExp(value, 'i');
//     switch (collection) {
//         case 'title':
//             songs = await Music.find({ title: regex})
//         break;
//         case 'artist':
//             songs = await Music.find({ artist: regex })
//         break;
//         case 'album':
//             songs = await Music.find({ album: regex })
//         break;
//         case 'genre':
//             songs = await Music.find({ genre: regex })
//         break;
//         default:
//             songs = []
//     }
//     rs.status(200).json({songs})
// }

const getVehicleById = async(rq = request, rs = response) => {
    const id = rq.params.id;
    rs.render("product")

};


const uploaImageVehicle = async(rq = request, rs = response) => {
   
};

const deleteVehicle = async(rq = request, rs = response) => {

}

module.exports = {
  uploaImageVehicle,
  getVehicleById,
  getVehicles,
  updateVehicles,
  createVehicles,
  deleteVehicle
}