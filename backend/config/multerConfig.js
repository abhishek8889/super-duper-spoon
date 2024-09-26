const multer = require('multer');
const path = require('path');
const CONSTANTS = require('../config/constants');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(CONSTANTS.PUB_PATH, 'uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const uploads = multer({ storage: storage });

module.exports = uploads;