import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@shared/ui/shadcn/navigation-menu";
import { NavLink } from "react-router";

import { Logo } from "@assets/icons/logo/Logo.tsx";

const navLinks = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Favorite", path: "/favorites" },
];

export const Header = () => {
    return (
        <header className="sticky-nav">
            <div className="flex items-center justify-around">
                <Logo />
                <NavigationMenu>
                    <NavigationMenuList>
                        {navLinks.map((item) => (
                            <NavigationMenuItem key={item.id}>
                                <NavigationMenuLink asChild>
                                    <NavLink to={item.path}>
                                        {item.title}
                                    </NavLink>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
};
