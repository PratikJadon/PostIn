// In your dataURI.js file
import DataURIParser from "datauri/parser.js";
import path from 'path';
import fs from 'fs';

const getDataUri = (file) =>{
    const parser = new DataURIParser();
    const extname = path.extname(file.originalname).toString();
    const fileBuffer = fs.readFileSync(file.path);
    console.log(extname);
    console.log(fileBuffer);
    return parser.format(extname, fileBuffer);
};

export default getDataUri;
