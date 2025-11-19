import * as db from '$lib/server/database'

export async function load({ params }) {
    const lists = await db.getLists();

    return {
        username: params.username,
        lists
    }
}