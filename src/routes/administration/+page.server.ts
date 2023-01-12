import { tokenNameMap } from "$lib/api/authentication";
import { findPageByOwnerInDb } from "../../lib/database/crudFunctions";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load(event: any) {
  
  let tokenNameMapPtr : Map<string, string> = new Map;

  tokenNameMap.subscribe(val => tokenNameMapPtr = val);

  let authenticationToken = event.cookies.get("authentication");
  
  if( authenticationToken === undefined || !tokenNameMapPtr.has(authenticationToken)){
     throw redirect(302, "/signin");
  }
    
  const username = tokenNameMapPtr.get(authenticationToken);

  let usersPages = await findPageByOwnerInDb(username);

  let names: Array<string> = [];

  usersPages.forEach((element : any) => {
    names.push(element.name);
  });

  let loggedUserVal : string | undefined = tokenNameMapPtr.get(authenticationToken);

  return {
    userPages: names,
    username: loggedUserVal
  };
}