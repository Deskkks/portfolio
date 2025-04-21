import { PrismaClient } from "@/generated/prisma/client"
const prisma = new PrismaClient()
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(){
  const data = await prisma.classe.findMany()
  return Response.json(data)
}

export async function POST(req){

  const dados = await prisma.classe.findMany()


  const cookieStore = await cookies()
  const login = cookieStore.get('login')

  const formData = await req.formData()
  const classe = formData.get('classe')
  const descricao = formData.get('descricao')
  const data = formData.get('data')

  dados.map(async (dado) => {
    if(data === dado.data){
      const update = await prisma.classe.update(
        {
          where: {
            data: data,
            usuario: login.value
          },
          data: {
            classe: classe,
            descricao: descricao
          }
        }
      )
      redirect("/cdp/calendario")
    }
  })

  const create = await prisma.classe.create({
    data: {
      classe: classe,
      descricao: descricao,
      data: data,
    }
  })
  console.log(create)
  redirect(`/cdp/calendario`)
}