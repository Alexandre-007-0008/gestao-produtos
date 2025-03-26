// /** 
//  * Recebe um JSON do tipo {
//  *    email: string,
//  *    password: string
//  * }
//  * */ 

// export async function POST(req) {
//     const json = await req.json()
//     console.log('auth POST', json)
  
//     const data = {
//       id: 1,
//       name: 'Usuário',
//       email: json.email,
//       datetime: new Date().toISOString()
//     }
  
//     console.log('req.cookies', req.cookies)
  
//     return Response.json(data)
//   }



import jwt from 'jsonwebtoken'

export async function POST(req: any) {
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
                            process.env.JWT_SECRET!,
                            { expiresIn: '1h' }
                        )
        })
    } catch (error: any) {
        console.log("Erro", error)
    }
}
