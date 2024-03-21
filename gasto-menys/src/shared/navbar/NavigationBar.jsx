import React from 'react';
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useTheme } from 'next-themes';

export function NavigationBar() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { theme, setTheme } = useTheme();
    const menuItems = [
        "Expenses",
        "Analytics",
        "Log Out",
    ];

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">GASTOMENYS</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">GASTOMENYS</p>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="#expenses">
                        Expenses
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#stats">
                        Analytics
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={item == "Log Out" ? "danger" : "foreground"}
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>

    );
}
