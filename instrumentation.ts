 import Usuario from '@/app/db/models/usuario'
// import bcrypt from 'bcrypt'

// Usuario.findOne({
//     login: 'admin'
// }).then((user) => {
//     if(!user) {
//         console.log("Criando usuário admin|admin")
//         bcrypt.hash('admin', 10, function(err, hash) {
//             Usuario.create({
//                 login: 'admin',
//                 senha: hash,
//                 email: 'lucianonobremoreira@gmail.com'
//             })
//         });
//     }
// })