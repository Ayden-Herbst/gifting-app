import * as db from '$lib/server/database'
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';


export async function load() {
    const users = await db.getUsers();
    return {
        users
    }
}

export const actions = {
    userAdd: async ({ request }) => {
        const data = await request.formData();

        try {
            db.addUser( data.get('username') as string )
            return { success: true };
        } catch (error) {
            return fail(422, {
				username: data.get('username'),
				error: error instanceof Error ? error.message : 'Some error'
            });
        }
    }
}