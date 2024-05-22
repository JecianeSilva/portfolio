"use client"

import * as NavigationMenu from "@radix-ui/react-navigation-menu"

interface NavbarProps { }

export function Navbar({ ...rest }: NavbarProps) {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex items-center gap-8">
        <NavigationMenu.Item className="border-b-4 border-transparent text-slate-400 py-4 hover:text-white hover:border-b-4 hover:border-sky-300">
          <NavigationMenu.Link>
            {/* <Link href={"#about"}>Sobre</Link> */}
            Sobre
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="border-b-4 border-transparent text-slate-400 py-4 hover:text-white hover:border-b-4 hover:border-sky-300">
          <NavigationMenu.Link>
            {/* <Link href={"#skill"}>Skills</Link> */}
            Skills
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="border-b-4 border-transparent text-slate-400 py-4 hover:text-white hover:border-b-4 hover:border-sky-300">
          <NavigationMenu.Link>
            {/* <Link href={"#projects"}>Projetos</Link> */}
            Projetos
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="border-b-4 border-transparent text-slate-400 py-4 hover:text-white hover:border-b-4 hover:border-sky-300">
          <NavigationMenu.Link>
            {/* <Link href="#contact">Contato</Link> */}
            Contato
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}