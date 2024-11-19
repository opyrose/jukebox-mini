const prisma = require("../prisma")

const seed = async () => {
    for ( let i = 0; i < 3; i++){
     const playlists = []
        for (let j=0; j < 5; j++ ){
        playlist.push({
            name: ` Song ${j}`,
            description: `This song is ${j}`,
        })    
        }
        await prisma.user.create({
            data:{
                name: `User ${i + 1}`,
                playlists: {
                    create: playlists,
                }
            }
        })
    }
}
seed();