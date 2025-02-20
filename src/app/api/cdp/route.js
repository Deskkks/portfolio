import classeModel from "@/model/classificacao";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(){
  const data = await classeModel.findAll()
  
  return Response.json(data)
}

export async function POST(req){

  const dados = await classeModel.findAll()


  const cookieStore = await cookies()
  const login = cookieStore.get('login')

  const formData = await req.formData()
  const classe = formData.get('classe')
  const descricao = formData.get('descricao')
  const data = formData.get('data')

  dados.map(dado => {
    if(data === dado.data){
      classeModel.update(
        {
          classe: classe,
          descricao: descricao
        },
        {
          where: {
            data: data,
            usuario: login.value
          }
        }
      )
      redirect("/cdp/calendario")
    }
  })

  classeModel.create({
    classe: classe,
    descricao: descricao,
    data: data,
    usuario: login.value
  })
  redirect(`/cdp/calendario`)
}