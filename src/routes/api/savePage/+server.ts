import { tokenNameMap } from "$lib/api/authentication";
import { insertIntoDb } from "$lib/database/crudFunctions";
import { defaultPageContent } from "$lib/pageEditor";


export async function POST(event: any) {
    const data = await event.request.json();
    console.log('formdata js log of request : ', data);
    
    let pageName = data.pageName;
    
    let body = data.body;
    
    let tokenNameMapPtr : Map<string,string> = new Map;
  
    tokenNameMap.subscribe(val => tokenNameMapPtr = val);
   
    let token = event.cookies.get("authentication");
    
    if(!tokenNameMapPtr.has(token)){
      return new Response(JSON.stringify({error: "user unauthenticated"}), {
        status: 403,
        });
    }
  
    let username : string = tokenNameMapPtr.get(token);
  
    insertIntoDb(defaultPageContent, pageName, username);
  
    return new Response(JSON.stringify({message: "page saved"}), {status: 200});
  }