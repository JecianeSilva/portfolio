"use client"

import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { Link } from "../Link/Link"

interface NavbarProps { }

export function Navbar({ ...rest }: NavbarProps) {

  const listOptionsNavBar = [
    { id: 1, label: "Home", href: "#home" },
    { id: 2, label: "Sobre min", href: "#about-me" },
    { id: 3, label: "Projetos", href: "#projects" },
    { id: 4, label: "Experiência", href: "#experience" },
    { id: 5, label: "Contato", href: "#contact" },
  ]

  return (
    <NavigationMenu.Root {...rest}>
      <NavigationMenu.List className="flex items-center gap-8 py-2">
        {listOptionsNavBar.map((item) => {
          return (
            <NavigationMenu.Item key={item.id}>
              <NavigationMenu.Link asChild>
                <Link href={item.href} label={item.label} />
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          )
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}