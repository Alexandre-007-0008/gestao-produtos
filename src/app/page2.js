
<<<<<<< HEAD
// import jwt from 'jsonwebtoken'

// export async function POST(req, any) {
//     try {
//         const { login, senha } = await req.json()

//         if (login != 'admin' || senha != 'admin') {
//             throw 'Ops'
//         }

//         return Response.json({
//             token: jwt.sign(
//                             {
//                                 user: {
//                                     id: '123'
//                                 }
//                             }, 
//                             process.env.JWT_SECRET,
//                             { expiresIn: '1h' }
//                         )
//         })
//     } catch (error) { //tava: catch (error: any) {...
//         console.log("Erro", error)
//     }
// }
=======
import jwt from 'jsonwebtoken'

export async function POST(req, any) {
    try {
        const { login, senha } = await req.json()

        if (login != 'admin' || senha != 'admin') {
            throw 'Ops'
        }

        return Response.json({
            token: jwt.sign(
                            {
                                user: {
                                    id: '123'
                                }
                            }, 
                            process.env.JWT_SECRET,
                            { expiresIn: '1h' }
                        )
        })
    } catch (error) { //tava: catch (error: any) {...
        console.log("Erro", error)
    }
}
>>>>>>> 9ec52dba9bf82f30dbd1ecb27ba1e35d11e25b15
