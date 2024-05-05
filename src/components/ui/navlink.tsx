// components/navbar/navlink.tsx
import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  icon: JSX.Element;
  label: string;
  isActive: boolean;
  onClick: () => void; // New prop to indicate active status
}

const NavLink = ({ href, icon, label, isActive, onClick }: NavLinkProps) => (
  <Link
    href={href}
    className={`flex my-2 items-center text-palletGray-200 py-3 px-5 rounded-lg cursor-pointer 
  hover:text-white hover:bg-palletPurple-400 duration-500 
  ${isActive ? "bg-palletPurple-400 text-white" : ""}`}
    onClick={onClick}
  >
    {icon}
    <span className="pl-2.5">{label}</span>
  </Link>
);

export default NavLink;
