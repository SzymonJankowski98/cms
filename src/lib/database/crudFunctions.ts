import mongoose, {model, connect} from "mongoose";
import {type IUser, type IPage, userSchema, pageSchema} from "../../lib/database/schema";
import { defaultPageContent } from "$lib/pageEditor";

const connectionString = "mongodb://127.0.0.1:27017/cmsDatastore";

const page = model<IPage>("Page", pageSchema);

const user = model<IUser>("User", userSchema);


export async function doPostToSavePage (schema: any, pageName: string) {
    const res = await fetch("/api/savePage", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            schema: schema,
            pageName: pageName
        })
    });
    
    const json = await res.json();
    console.log(JSON.stringify(json));
}

export async function updateOrInsertIfNotInDb(pageContent: any, name: string, owner: string){
    await connect(connectionString);

    let pageInPreviousState = await page.findOne({name: name, owner: owner});

    console.log("pageContent in crud");
    console.log(pageContent);
    
    

    if(!pageInPreviousState?.$isEmpty){

        console.log("new page created");

        let pageAfterChanges = new page({
            pageContent: pageContent,
            name: name,
            owner: owner
        });

        pageAfterChanges.save();
    }else{

        console.log("page updated");
        console.log(pageInPreviousState);
        
        pageInPreviousState.pageContent = pageContent;

        pageInPreviousState.save();;

    }

}

export async function findPageByOwnerInDb(owner: string | undefined){
    await connect(connectionString);
    mongoose.set("strictQuery", false);

    let playload = await page.find({owner: owner});

    console.log("from db\n" + playload);

    return playload;
}

export async function findUserInDb(username: string) {
    await connect(connectionString);
    mongoose.set("strictQuery", false);

    let playload = await user.find({username: username});

    console.log("from db\n" + playload);

    return playload;
}

export async function findPageByNameInDb(pageName: string) {
    await connect(connectionString);
    mongoose.set("strictQuery", false);

    let playload = await page.findOne({name: pageName});

    console.log("from db\n" + playload);

    return playload;    
}

export async function findPageByNameAndOwnerInDb(pageName: string, owner: string) {
    await connect(connectionString);
    mongoose.set("strictQuery", false);

    let playload = await user.findOne({name: pageName, owner: owner});

    console.log("from db\n" + playload);

    return playload;    
}

export async function insertNewPageToDb(pageName: string, owner: string) {
    await connect(connectionString);
    mongoose.set("strictQuery", false);

    let newPage = new page({
        name: pageName,
        owner: owner,
        pageContent: defaultPageContent
    });

    newPage.save();

    console.log("from db\n" + newPage);
    
}