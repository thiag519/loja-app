import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { RocketIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <RocketIcon className="mr-2"/>
          <p>Carrinho</p>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5 my-3">
          ...
        </div>
        <Separator className="my-4"/>
        <div className="flrx justify-berween items-center text-xs">
          <div>Subtoatl:</div>
          <div>...</div>
        </div>
        <Separator className="my-4"/>
        <div className="text-center">
          <Button>Finalizar Compra</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}