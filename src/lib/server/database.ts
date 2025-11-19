import prisma from "./prisma";

// Returning Entries

export async function getUsers() {
	return await prisma.user.findMany();
}

export async function getLists() {
	return await prisma.list.findMany({
		include: {
			items: true,
			participants: true,
		}
	})
}

export async function getUserByName(userName: string) {
	if (!userName || userName === '') {
		throw new Error('Name cannot be empty')
	}


	return await prisma.user.findUnique({
		where: {
			name: userName
		},

		include: {
			lists: true,
			receivingGifts: true,
			givingGifts: true
		}
	})
} 

// Adding Entries

export async function addGift(
		listName: string,
		giftName: string,
		recipientName: string,
		gifterName: string
	) {
		return await prisma.gift.create({
			data: {
				name: giftName,
				listName,
				recepientName: recipientName,
				gifterName
			}
		});
	}

export async function addUser(userName:string | null) {
	if (!userName || userName === '') {
		throw new Error('Username cannot be empty');
	}

	if ((await prisma.user.findMany()).find((user) => user.name === userName)) {
		throw new Error('Cannot add duplicate usernames')
	}

	await prisma.user.create({
		data: {
			name: userName
		}
	})
}

