import Button from "@/components/buttonHome/button";
import Header from "./header/Header";

export default function Draining({children}) {

  return(
    <>
      <Header/>
      {children}
      <Button/>
    </>
  )
}