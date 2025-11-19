import { PrismaClient } from "../src/generated/prisma/client";

const prisma = new PrismaClient();

export async function main() {
    await prisma.list.createMany({
        data: [
            {
                name: "Arne's Birthday",
                date: new Date("2025-04-11"),
                type: "Birthday",
            },
            {
                name: "Christmas Party",
                date: new Date("2025-12-25"),
                type: "Gathering"
            },
        ]
    });
    
    await prisma.user.createMany({
        data: [
            {
                name: 'Ayden',
            },
            {
                name: 'Arne'
            }
        ]
    });

    await prisma.user.update({
        where: {
            name: "Ayden"
        },
        data: {
            lists: {
                connect: [
                    { name: "Arne's Birthday" },
                    { name: "Christmas Party" }
                ]
            }
        }
    });

    await prisma.user.update({
        where: { name : "Arne" },
        data: { lists: { connect: [ { name: "Arne's Birthday" } ] } }
    });

    await prisma.user.update({
        where: { name : "Ayden" },
        data: {
            givingGifts: {
                createMany: {
                    data: [
                        {
                            name: "Wine",
                            listName: "Arne's Birthday",
                            recepientName: "Arne",
                        },
                        {
                            name: "Truck",
                            listName: "Christmas Party",
                            recepientName: "Arne"
                        }
                    ]
                }
            }
        }
    });

    const users = await prisma.user.findMany({
        include: {
            lists: true
        }
    });

    const lists = await prisma.list.findMany();

    const gifts = await prisma.gift.findMany({
        include: {
            gifter: true,
            recipient: true,
            list: true
        }
    });


    console.log(users)
    console.log(lists)
    console.log(gifts)
}

main();