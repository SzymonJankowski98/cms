import { insertIntoDb } from '$lib/database/crudFunctions';
import { defaultPageContent } from '$lib/pageEditor';
import { json } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export function POST(event: any) {
  // log all headers
  console.log(...event.request.headers);
 
  insertIntoDb(defaultPageContent, "test_User");

  return json({
    // retrieve a specific header
    userAgent: event.request.headers.get('user-agent')
  });
}