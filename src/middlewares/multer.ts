import multer from "multer";
import { v4 as uuid } from "uuid";

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "uploads");
  },
  filename(req, file, callback) {
    console.log("file.originalname", file.originalname);

    const id = uuid();

    const extName = file.originalname.split(".").pop();
    console.log("extName", extName);

    callback(null, `${id}.${extName}`);
  },
});

export const singleUpload = multer({ storage }).single("photo");
