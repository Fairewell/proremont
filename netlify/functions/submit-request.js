
const { processEntries, saveEntries } = require('./download-bd.cjs');

async function openDb() {
    try {
        const {data, data_last_id} = await processEntries();
        return (data, data_last_id);
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
}

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        };
    }

    const request = JSON.parse(event.body);

    try {
        const {db, db_last_id} = await openDb();
        const { fio, nomer_telefona, email, type, date, zayavka_status, comment, calculator } = request;
        console.log(request);

        let new_request;
        if (type === 0) {
            new_request = db, {
                "id": db_last_id + 1,
                "fio": fio,
                "nomer_telefona": nomer_telefona,
                "email": email,
                "type": type,
                "date": date,
                "zayavka_status": zayavka_status,
                "comment": comment,
                calculator
            };
        } else {
            new_request = db, {
                "id": db_last_id + 1,
                "fio": fio,
                "nomer_telefona": nomer_telefona,
                "email": email,
                "type": type,
                "date": date,
                "zayavka_status": zayavka_status,
                "comment": comment
            };
        }

        if (new_request) {
            var status = saveEntries(new_request);
            if (status === 200){
              return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Request saved successfully' }),
            };
            }
            else {
              return {
                statusCode: 500,
                body: JSON.stringify({ message: error.message, code: error })
              }
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Request saved successfully' }),
        };
    } catch (error) {
        // Handle rollback operation using sqliteDb
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.message }),
        };
    }
};
