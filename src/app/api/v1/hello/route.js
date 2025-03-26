// Pode receber um Query Param chamada name
// Exemplo: http://localhost:3000/api/v1/hello?name=Xande

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams
    const name = searchParams.get('Xande')

    const data = {
        message: `Olá${name ? `, ${name}!`: ''}!`,
        datetime: new Date().toISOString()
    }

    return Response.json(data)
}
