const {
    BlobServiceClient,
    StorageSharedKeyCredential,
    newPipeline
} = require('@azure/storage-blob');

const blobServiceClient = BlobServiceClient.fromConnectionString('pritamblobstorage')

const containerClient = blobServiceClient.getContainerClient('pritamkai')
const blobclient = containerClient.getBlockBlobClient('download.jpg')
let fileStream = fs.createReadStream('C:\Users\accer\OneDrive\Desktop\images\download.jpg');
const blobOptions = { blobHTTPHeaders: { blobContentType: 'image/jpg' } };
blobclient.uploadStream(fileStream, undefined, undefined, blobOptions);