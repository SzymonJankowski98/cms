import mongoose, {Schema, model, connect, Model} from "mongoose";
import type {IPage} from "../../lib/schemas/schema";
import { pageSchema } from "../../lib/schemas/schema";
  
const page = model<IPage>("Page", pageSchema);
  
mongoose.set("strictQuery", false);


async function run(page : any) {
  let playload = await page.find();

  console.log("from db\n" + playload);

  return playload  
}

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    await connect("mongodb://127.0.0.1:27017/cmsDatastore");
    
    let usersPages = await run(page).catch(err => console.log(err));

    let names: Array<string> = [];

    usersPages.forEach((element : any) => {
      names.push(element.name);
    });

    return {userPages: names};
  }