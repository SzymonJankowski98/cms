import { tokenNameMap } from "$lib/api/authentication";
import { deletePageInDb, updateOrInsertIfNotInDb } from "$lib/database/crudFunctions";

export async function POST(event: any) {
    const data = await event.request.json();
    console.log('formdata js log of request : ', data);
    
    let pageName = data.pageName;

    let tokenNameMapPtr : Map<string,string> = new Map;
  
    tokenNameMap.subscribe(val => tokenNameMapPtr = val);
   
    let token = event.cookies.get("authentication");
    
    if(!tokenNameMapPtr.has(token)){
        return new Response(JSON.stringify({error: "user unauthenticated"}), {
          status: 403,
        });
    }
    
    deletePageInDb(pageName, tokenNameMapPtr.get(token));

    return new Response(JSON.stringify({message: "page deleted"}), {status: 200});
    
}