const Dropbox = require('dropbox').Dropbox;
require('dotenv').config();
const fetch = require('isomorphic-fetch');

const accessToken = process.env.ACCESS_TOKEN;
const itemID = process.env.ITEM_ID; // json
const filePath = '/request_base.json';
const dbx = new Dropbox({ accessToken: accessToken, fetch: fetch });

async function processEntries() {
    try {
        const response = await dbx.filesListFolder({ path: '' });
        console.log('Response:', response);

        if (response.result.entries) {
            for (const entry of response.result.entries) {
                if (entry.id === itemID) {
                    const downloadResponse = await dbx.filesDownload({ path: entry.path_lower });
                    //console.log("DOWNLOAD RESPONSE: " + JSON.stringify(downloadResponse));
                    const fileContents = downloadResponse.result.fileBinary;
                    // console.log("FILE CONTENT: " + fileContents);

                    // Convert bytes to string and parse JSON
                    const jsonString = Buffer.from(fileContents, 'binary').toString('utf8');
                    const jsonData = JSON.parse(jsonString);


                    console.log(jsonData);
                    return (jsonData);
                } else {
                    //console.log(entry.name);
                }
            }
        } else {
            console.log('No entries found in the response.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}


async function saveEntries(request) {
    try {
        await dbx.filesGetMetadata({ path: filePath });
        // Если файл существует, обновляем его
        await dbx.filesUpload({ path: filePath, contents: request, mode: { '.tag': 'overwrite' } });
        console.log('File uploaded or updated successfully');
        return 200;
    } catch (error) {
        // Если файл не существует, загружаем новый файл
        if (error.error) {
            await dbx.filesUpload({ path: filePath, contents: request });
            console.log('File uploaded or updated ');
            return error;
        } else {
            console.error('Error uploading or updating file:', error);
            return error;
        }
    }
}

module.exports = {
    processEntries: processEntries,
    saveEntries: saveEntries
};
