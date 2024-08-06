
const { processEntries, saveEntries } = require('./download-bd.cjs');

async function openDb() {
    try {
        const data = await processEntries();
        console.log("OPENDB. DATA FROM PROCCESSENTRIES" + data);
        return data;
    } catch (error) {
        console.log("ERROR IN func.OPENDB");
        return {
            statusCode: 500,
            body: JSON.stringify({ errorXXX: error.message }),
        };
    }
}

exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        };
    }

    const request = JSON.parse(event.body);

    try {
        const db = await openDb();
        console.log("SUBMIT_REQ. BD FROM D_BD: " + db);
        const { fio, nomer_telefona, email, type, date, zayavka_status, comment, calculator } = request;
        console.log("SUBMIT_REQ. REQUEST FROM CODE: " + request);

        let new_request;
        if (type === 0) {
            new_request = {
                fio: fio,
                nomer_telefona: nomer_telefona,
                email: email,
                type: type,
                date: date,
                zayavka_status: zayavka_status,
                comment: comment,
                calculator
            };
        } else {
            new_request = {
                fio: fio,
                nomer_telefona: nomer_telefona,
                email: email,
                type: type,
                date: date,
                zayavka_status: zayavka_status,
                comment: comment
            };
        }

        if (new_request) {
            const dataArray = [db, new_request];
            var status = saveEntries(JSON.stringify(dataArray));
            if (status === 200) {
                return {
                    statusCode: 200,
                    body: JSON.stringify({ message: 'Request saved successfully from saveEntries' }),
                };
            }
            else {
                console.log("ERROR IN func.exports.handler");
                return {
                    statusCode: 501,
                    body: JSON.stringify({ messageEXPORT: error.message })
                }
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: status }),
        };
    } catch (error) {
        console.log("ERROR IN func.exports.handler catch(error)");
        // Handle rollback operation using sqliteDb
        return {
            statusCode: 500,
            body: JSON.stringify({ messageEXPORTERROR: error }),
        };
    }
};
