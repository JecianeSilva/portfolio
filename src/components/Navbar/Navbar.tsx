"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "../Link/Link";

interface NavbarProps {}

export function Navbar({ ...rest }: NavbarProps) {
  const listOptionsNavBar = [
    { id: 1, label: "Home", href: "#home" },
    { id: 2, label: "Projetos", href: "/projetos" },
    { id: 3, label: "Experiência", href: "/" },
    { id: 4, label: "Contato", href: "/contate" },
  ];

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
          );
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
