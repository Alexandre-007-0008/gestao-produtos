import Usuario from '@/app/db/models/usuario'
import bcrypt from 'bcrypt'

console.log("iniciando instrumentations.ts")

//comentar depois de executar uma vez, ele serve apenas pra criar o usuário. Deve-se comentar pra ele não dar erro

// Usuario.findOne({
//     login: 'admin'
// }).then((user) => {
//     if(!user) {
//         console.log("Criando usuário admin|admin")
//         bcrypt.hash('admin', 10, function(err, hash) {
//             Usuario.create({
//                 login: 'admin',
//                 senha: hash,
//                 email: 'xandeif.2007@gmail.com'
//             })
//         });
//     }
// })