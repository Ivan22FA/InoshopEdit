"use client";

import Link from "next/link";
import * as React from "react";
import { useState, useEffect } from "react";

import { logoutAction } from "@/app/authentication/logout/action";
import { LoginDialog } from "@/components/auth/LoginDialog";
import { RegisterDialog } from "@/components/auth/RegisterDialog";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "./ui/button";

export default function Navbar() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  const handleLogout = async () => {
    await logoutAction();
    window.location.href = "/";
  };

  // === DETECT SCROLL ===
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg text-black py-2"
          : "bg-transparent text-white py-4"
      }`}
    >
      <div className="mx-auto flex max-w-11/12 items-center justify-between px-2 md:px-4">
        {/* Logo */}
        <Link
          href="/"
          className={`text-xl font-semibold transition-all duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          Inoshop
        </Link>

        {/* Navigation */}
        <NavigationMenu viewport={isMobile}>
          <NavigationMenuList className="flex-wrap">

            {/* Innovation Marketplace */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`transition ${isScrolled ? "" : "hover:bg-white/30"} text-base md:text-lg`}
              >
                Innovation Marketplace
              </NavigationMenuTrigger>
              <NavigationMenuContent className="border-none backdrop-blur-md">
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/marketplace" title="Getting Strated">
                    Pergi ke halaman utama marketplace
                  </ListItem>
                  <ListItem href="/innovation" title="Approved Innovations">
                    Katalog inovasi terbaru
                  </ListItem>
                  <ListItem href="/matching" title="Innovation Matching">
                    Sistem pencocokan inovasi
                  </ListItem>
                  <ListItem href="/funding" title="Innovation Funding">
                    Informasi pendanaan & program
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* News & Events */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`transition ${isScrolled ? "" : "hover:bg-white/30"} text-base md:text-lg`}
              >
                News & Events
              </NavigationMenuTrigger>
              <NavigationMenuContent className="border-none backdrop-blur-md">
                <ul className="grid sm:w-[300px] gap-2 md:w-[400px] lg:w-[500px]">
                  <ListItem href="/news" title="News and Media">
                    Berita media dan informasi inovasi.
                  </ListItem>
                  <ListItem href="/events" title="Calendar of Events">
                    Acara, workshop, dan seminar inovasi.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link
                  href="/about"
                  className={`${navigationMenuTriggerStyle()} hover:bg-transparent transition-none text-base md:text-lg`}
                >
                  About Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link
                  href="/contact"
                  className={`${navigationMenuTriggerStyle()} hover:bg-transparent transition-none text-base md:text-lg`}
                >
                  Contact Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Profile */}
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger
                className={`transition ${isScrolled ? "" : "hover:bg-white/30"}text-base md:text-lg`}
              >
                Profile
              </NavigationMenuTrigger>
              <NavigationMenuContent className="border-none backdrop-blur-md">
                <ul className="grid w-fit gap-4">
                  <li>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setOpenLogin(true)}
                    >
                      Masuk
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setOpenRegister(true)}
                    >
                      Register
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        <LoginDialog open={openLogin} onOpenChange={setOpenLogin} />
        <RegisterDialog open={openRegister} onOpenChange={setOpenRegister} />
      </div>
    </nav>
  );
}

// ================= ListItem Component =================
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  title: string;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
