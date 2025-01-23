const { MongoClient } = require("mongodb")
// mongodb+srv://<db_username>:<db_password>@namastenode.edk5r.mongodb.net/

const url = 'mongodb+srv://namastedev:namastedev123@namastenode.edk5r.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'HelloWorld';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    // the following code examples can be pasted here...

    const data = {
        firstname: "Kara",
        lastname: "Bunny",
        city: "Kerala",
        mobile: "3214569874"
    }


    // const insertresult = await collection.insertMany([data]);
    const insertresult = await collection.insertOne(data);

    console.log("inserted reault", insertresult)

    // const updateResult = await collection.updateOne({ firstname: "John" }, { $set: { firstname: "Bunny" } });
    // console.log('Updated documents =>', updateResult);

    // const findresult = await collection.find({}).toArray();
    // console.log("Find result:", findresult)
    // const countResult = await collection.countDocuments({});
    // // const countResult = await collection.countDocuments();

    // console.log("countResult", countResult)


    // const result = await collection.find({ firstname: "Bunny" }).toArray();
    const result = await collection.find({ firstname: "Bunny" }).count();

    console.log(result)
    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());



//NOTES

// Go to mongo DB website
//create a free m0 cluster
// create a user
//get the connection string

//install mongodb compass
//create  a database
//install mongodb package
//create a connection from the code
//DOCUMENTS CRUD - Create, Read, Update, Delete
