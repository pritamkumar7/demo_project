const {
    newPipeline,
    Aborter,
    BlobURL,
    BlockBlobURL,
    ContainerURL,
    ServiceURL,
    StorageURL,
    BlobServiceClient,
    generateAccountSASQueryParameters,
    AccountSASPermissions,
    AccountSASServices,
    AccountSASResourceTypes,
    StorageSharedKeyCredential,
    generateBlobSASQueryParameters,
    uploadStreamToBlockBlob,
    BlobSASPermissions,
    SASProtocol,
    AnonymousCredential,
} = require("@azure/storage-blob");
require("dotenv").config();
const express = require('express');
const app = express();
const router = express.Router();
var bodyParser = require('body-parser')
const containerName1 = 'test';
const multer = require('multer');
const inMemoryStorage = multer.memoryStorage();
const uploadStrategy = multer({ storage: inMemoryStorage }).single('image');
const getStream = require('into-stream');
const { appendFile } = require("fs");
const ONE_MEGABYTE = 1024 * 1024;
const uploadOptions = { bufferSize: 4 * ONE_MEGABYTE, maxBuffers: 20 };
const STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME;
const ACCOUNT_ACCESS_KEY = process.env.AZURE_STORAGE_ACCOUNT_KEY;
const sharedKeyCredential = new StorageSharedKeyCredential(
    STORAGE_ACCOUNT_NAME,
    ACCOUNT_ACCESS_KEY
);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const pipeline = newPipeline(sharedKeyCredential);
const blobServiceClient = new BlobServiceClient(
    `https://teststoragesixnine.blob.core.windows.net/test?sp=racwdli&st=2022-12-27T03:39:34Z&se=2022-12-27T11:39:34Z&sv=2021-06-08&sr=c&sig=AUsHin5JIYrh%2B2xfCpooABXEqpY4VjfrRo%2FJeeInRYA%3D`,
    pipeline
);
const getBlobName = originalName => {
    // Use a random number to generate a unique file name, 
    // removing "0." from the start of the string.
    const identifier = Math.random().toString().replace(/0\./, '');
    return `${identifier}-${originalName}`;
};
// console.log(getBlobName);
app.post('/', uploadStrategy, async(req, res) => {
    const blobName = getBlobName(req.file.originalname);
    const stream = getStream(req.file.buffer);
    const containerClient = blobServiceClient.getContainerClient(containerName1);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    console.log(uploadOptions.maxBuffers);
    try {
        await blockBlobClient.uploadStream(stream,
            uploadOptions.bufferSize, uploadOptions.maxBuffers, { blobHTTPHeaders: { blobContentType: "image/jpeg" } });
        res.render('success', { message: 'File uploaded to Azure Blob Storage.' });
    } catch (err) {
        res.render('error', { message: err.message });
    }
});
app.listen(4000)