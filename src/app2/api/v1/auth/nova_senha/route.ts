import { enviarEmail } from '@/app2/lib/email' // falta ajeitar isso aqui
import Usuario from '@/db/models/usuario'
import bcrypt from 'bcrypt'

export async function POST(req: any) {
    try {
        const { token, senha } = await req.json()

        const user = await Usuario.findOne({ token_nova_senha: token })

        if (!user) {
            throw 'Usuário não encontrado'
        }

        user.senha = await bcrypt.hash(senha, 10)
        user.save()

        // Enviar e-mail
        await enviarEmail(
            "xande@teste.com.br",
            "Você gerou uma nova senha!",
            `Opa, você gerou uma nova senha!`,
            `
                <h1>Pediu nova senha?</h1>
                <p>Deu bom!</p>
            `
        )

        return Response.json({
            mensagem: "Senha alterada com sucesso"
        })
    } catch (error: any) {
        console.log("Erro", error)
        return Response.json({
                error: error
            },
            { status: 400 }
        )
    }
}