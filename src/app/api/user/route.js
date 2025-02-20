import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import usersModel from "@/model/users"

export async function POST(req) {
  
  const data = await usersModel.findAll()

  const cookieStore = await cookies()

  const formData = await req.formData()
  const email = formData.get('email')
  const senha = formData.get('senha')
  const app = formData.get('app')

  var erros = []
  data.map((user) => {
    if(user.email !== email) {
      erros.push("E-mail não cadastrado")
    }
    if(user.email === email && user.senha !== senha) {
      erros.push( "Senha está incorreta")
    }
    if(user.email === email && user.senha === senha) {
      cookieStore.set('login', user.id, {secure: true})
      redirect(`/${app}`)
    }
  })
  redirect(`/${app}/login`)
}