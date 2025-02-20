import Button from "@/components/buttonHome/button";
import Header from "./header/header";

export default async function Draining({children}) {


  return(
    <>
      <Header/>
      {children}
      <Button/>
    </>
  )
}