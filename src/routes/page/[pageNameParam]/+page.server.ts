import {tokenNameMap} from "$lib/api/authentication";
import {findPageByNameInDb} from "$lib/database/crudFunctions";
import {PageEditorStore} from "$lib/pageEditorStore";

/** @type {import('./$types').PageServerLoad} */
export async function load(event:any) {

    let release : boolean = event.url.searchParams.get('release') === "true";

    let tokenNameMapPtr = new Map;

    tokenNameMap.subscribe(val => tokenNameMapPtr = val);

    let name : string | undefined = tokenNameMapPtr.get(event.cookies.get("authentication"));

    let model = await findPageByNameInDb(event.params.pageNameParam);

    model = model.pageContent;
        
    if(model === null){
        PageEditorStore.subscribe(val => model = val);
    }

    return {
        editMode: !release && name !== undefined,
        schema: model,
        pageName: event.params.pageNameParam
    }
}