"use client";

import NavLink from "@/components/ui/navlink";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { GiDeathStar } from "react-icons/gi";
export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const links = [
    {
      href: "/components/navigation",
      icon: <GiDeathStar size={20} />,
      label: "Navigation",
    },
    {
      href: "/components/cards",
      icon: <GiDeathStar size={20} />,
      label: "Cards",
    },
    {
      href: "/components/buttons",
      icon: <GiDeathStar size={20} />,
      label: "Buttons",
    },
    {
      href: "/components/badge",
      icon: <GiDeathStar size={20} />,
      label: "Badge",
    },
    // { href: "/", icon: <FiLogOut size={20} />, label: "Logout" },
  ];
  const closeMobileMenu = useCallback(() => {
    setMobileMenu(false);
  }, []);
  const handleLogout = async () => {
    // await signOut({ redirect: false });
    router.replace("/");
  };
  return (
    <>
      <div className="flex">
        <aside className="bg-gray-800 text-white p-5 col-span-3 h-screen fixed top-0 left-0 w-64 transition-transform -translate-x-full sm:translate-x-0">
          {links.map((link, index) => (
            <NavLink
              key={index}
              href={link.href}
              icon={link.icon}
              label={link.label}
              isActive={pathname === link.href}
              onClick={link.label === "Logout" ? handleLogout : closeMobileMenu}
            />
          ))}
        </aside>
        <div className="sm:ml-64 ">{children}</div>
      </div>
    </>
  );
}
