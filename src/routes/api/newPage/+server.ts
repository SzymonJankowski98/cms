import { tokenNameMap } from "$lib/api/authentication";
import { insertNewPageToDb, updateOrInsertIfNotInDb } from "$lib/database/crudFunctions";

export async function POST(event: any) {
    const data = await event.request.formData();
    console.log('formdata js log of request : ', data);
    
    let pageName = data.get("name");

    let tokenNameMapPtr : Map<string,string> = new Map;
  
    tokenNameMap.subscribe(val => tokenNameMapPtr = val);
   
    let token = event.cookies.get("authentication");
    
    if(!tokenNameMapPtr.has(token)){
        return new Response(JSON.stringify({error: "user unauthenticated"}), {
          status: 403,
        });
    }
    
    insertNewPageToDb(pageName, tokenNameMapPtr.get(token));

    return new Response("Redirect", { status: 303, headers: { Location: "/page/" + pageName } });
    
}