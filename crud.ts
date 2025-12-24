import { User } from './generated/prisma/client';
import { prisma } from "./lib/prisma";

async function run() {

    // 1. Create user:
    const createUser = await prisma.user.create({
        data: {
            name: "Riki Ahmed",
            email: "riki@gmail.com"
        }
    })

    console.log("Created User: ", createUser);


    // 2. Crate post:
    const createPost = await prisma.posts.create({
        data: {
            title: 'Title 01',
            content: 'Content 01',
            authorId: 1
        }
    })

    console.log("Created Post:  ", createPost);


    // 3. Create profile:
    const createProfile = await prisma.profile.create({
        data: {
            bio: "This is Abu Bakkar from Bangladesh",
            userId : 1
        }
    })

    console.log("Created Profile", createProfile);


    // 4. Get / Retrieve all users
    const getAllUsers = await prisma.user.findMany({
        // include: {
        //     posts: true,
        //     profile: true
        // }

        select : {
            id: true,
            name: true,
            email: true,
            posts: true,
            profile: true
        }
    })

    console.dir(getAllUsers, { depth: Infinity });



    // 5. Update profile:
    const updatedProfile = await prisma.profile.update({
        where: {
            userId: 1
        },
        data: {
            bio: "This is the updated profile bio",
            dateOfBirth: "2000-12-24T15:28:45.481Z"
        },
        select : {
            id: true,
            bio: true,
            user: true
        }
    })

    console.log("Updated Profile: ", updatedProfile);


    // 6. Delete user:
    const deleteUser = await prisma.user.delete({
        where : {
            id: 2
        }
    })

    console.log("Deleted User: ",deleteUser);


    // 7. Get user by id
    const getUserById = await prisma.user.findUnique({
        where : {
            id : 1
        },
        include : {
            posts: true,
            profile: true
        }
    })

    console.log("Get User By Id: ", getUserById);


    // 8. upsert users info:
    const upsertUser = await prisma.user.upsert({
        where : {
            email: "abu@gmail.com"
        },
        update : {
            name: "Abu Becore Riki updated"

        },
      create:  {
        name: "Abu Becore Riki created",
        email: "abu1@gmail.com"
        }
    })

    console.log("Upsert User : ", upsertUser);

}

run()