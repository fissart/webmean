import multer from 'multer'
import path from 'path'
import uuid from 'uuid/v4';

// Settings
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null,'uploads/tasks')},
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname))
    }
});
export default multer({storage:storage});
