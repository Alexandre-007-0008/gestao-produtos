import Usuario from '@/app/db/models/usuario'
import Produto from '@/app/db/models/produto'
import bcrypt from 'bcrypt'

console.log("iniciando instrumentations.ts")

//comentar depois de executar uma vez, ele serve apenas pra criar o usuário. Deve-se comentar pra ele não dar erro

Usuario.findOne({
    login: 'admin'
}).then((user) => {
    if(!user) {
        console.log("Criando usuário admin|admin")
        bcrypt.hash('admin', 10, function(err, hash) {
            Usuario.create({
                login: 'admin',
                senha: hash,
                email: 'xandeif.2007@gmail.com'
            })
        });
    }
})


// Criar a collection produtos (caso não exista)
Produto.findOne({}).then((produto) => {
    if (!produto) {
        console.log("Criando a collection produtos com um item de exemplo")
        Produto.create({
            name: "Produto Exemplo",
            valor: 99.99
        });
    }
});