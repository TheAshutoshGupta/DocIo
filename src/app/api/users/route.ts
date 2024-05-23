export async function GET() {
    return Response.json({message: 'Hello, World!'});
}

export async function POST(request:Request) {
    const userData=await request.json();


    return Response.json({message: 'Hello, World!', userData});
}