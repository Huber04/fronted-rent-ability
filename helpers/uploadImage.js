const cloudinary = require('cloudinary').v2
cloudinary.config({ 
    cloud_name: 'dtwmgg65j', 
    api_key: '758152855752119', 
    api_secret: 'xASnLSrNyFbv0PaqZem1onBgSpQ' 
});

const uploadImage = async (file)=> {
    try {
        return await cloudinary.uploader.upload(file)
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = uploadImage;