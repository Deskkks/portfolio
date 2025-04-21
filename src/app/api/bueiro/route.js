import { PrismaClient } from "@/generated/prisma/client"
const prisma = new PrismaClient()

export async function GET(){

  const data = await prisma.bueiros.findMany()
  
  return Response.json(data)
}

export async function POST(req) {

  const data = await prisma.bueiros.findMany()

  const formData = await req.formData()
  const search = formData.get('search')

  if(search){
    var bueiros = []
      
    data.forEach((bueiro) => {
      if(search === bueiro.cep){
        bueiros.push(bueiro.dataValues)
      }
      if(search === bueiro.UF){
        bueiros.push(bueiro.dataValues)
      }
      if(search === bueiro.cidade){
        bueiros.push(bueiro.dataValues)
      }
      if(search === bueiro.situacao){
        bueiros.push(bueiro.dataValues)
      }
    })
    return Response.json(bueiros)
  }
  return new Response(null)
}