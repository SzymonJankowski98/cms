import { dev } from '$app/environment';
import { tokenNameMap } from '$lib/api/authentication';
import { findUserInDb } from '$lib/database/crudFunctions';
import { redirect } from '@sveltejs/kit';
import {MD5} from 'crypto-js';


/** @type {import('./$types').PageServerLoad} */
export async function load(event: any) {
    event.cookies.delete("authentication");

}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request, cookies}) => {
    
        const data = await request.formData();

        console.log(data);

        let username : string = data.get("username");
        let password : string = data.get("password");

        let hash = MD5(password).toString();

        let userList = await findUserInDb(username);

        if(userList.length === 0){
            console.log("unknown user");

            return;
        }

        if(userList[0].hash !== hash){
            console.log("wrong password");

            return;
        }

        let token : string = username + hash;

        let authenticationToken : string = MD5(token).toString()

        tokenNameMap.update((map : Map<string, string>) => {
            map.set(authenticationToken, username);
            return map;
        });

        cookies.set('authentication', authenticationToken, {
            path: '/',
            httpOnly: true,
            sameSite: 'lax',
            secure: !dev,
            maxAge: 60 * 60 * 24 * 30
        });

        throw redirect(302, "/administration");
    }
  };