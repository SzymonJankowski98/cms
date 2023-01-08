import { findInDb } from "../../lib/database/crudFunctions";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    
  let usersPages = await findInDb();

  let names: Array<string> = [];

  usersPages.forEach((element : any) => {
    names.push(element.name);
  });

  return {userPages: names};
}