import mongoose, {Schema, model, connect, Model} from "mongoose";

import type {IPage} from "../../lib/database/schema";
import { pageSchema } from "../../lib/database/schema";
const connectionString = "mongodb://127.0.0.1:27017/cmsDatastore";

const page = model<IPage>("Page", pageSchema);


export async function doPost (schema: any, authentication: string) {
    const res = await fetch("/api/savePage", {
        method: 'POST',
        body: JSON.stringify({
            schema: schema,
            authentication: authentication
        })
    });
    
    const json = await res.json();
    console.log(JSON.stringify(json));
}

export async function insertIntoDb(pageContent: any, name: string){
    await connect(connectionString);

    let newPage = new page({
        pageContent: pageContent,
        name: name
    });

    newPage.save();
}

export async function findInDb(){
    await connect(connectionString);
    mongoose.set("strictQuery", false);

    let playload = await page.find();

    console.log("from db\n" + playload);

    return playload;
}