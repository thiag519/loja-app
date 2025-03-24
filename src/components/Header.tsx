import { Logo } from "@/components/Logo"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Sidebar } from "@/components/cart/Sidebar"

export const Hearder = () => {
  return (
    <header className="flex justify-between items-center my-5 mx-3">
      <div className="flex items-center gap-3">
        <Logo/>
        <ThemeToggle/>
      </div>
      <div className="flex items-center gap-3">
          <Sidebar/>
      </div>
    </header>
  )
}