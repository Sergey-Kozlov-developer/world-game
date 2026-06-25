import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@shared/ui/shadcn/navigation-menu";
import { NavLink } from "react-router";

import logo from "@assets/logo.avif";

const navLinks = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Favorite", path: "/favorites" },
];

export const Header = () => {
    return (
        <header className="sticky-nav">
            <div className="flex items-center justify-around">
                <img className="w-40" src={logo} alt="Games" />
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
