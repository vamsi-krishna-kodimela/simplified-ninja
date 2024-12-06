import React from "react";
import Logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router";
import { Home, Icon, BookOpen, Users } from "react-feather";

const Navbar = () => {
  const links: { icon: Icon; title: string; route: string }[] = [
    {
      icon: Home,
      title: "Feed",
      route: "/",
    },
    {
      icon: BookOpen,
      title: "Academy",
      route: "/academy",
    },
    {
      icon: Users,
      title: "Groups",
      route: "/groups",
    },
  ];
  return (
    <nav className="p-8 px-6 shadow h-100 hidden md:block">
      <div className="flex gap-2 items-center">
        <img className="w-8" src={Logo} alt="Simplified.ninja" />
        <h1 className="font-semibold text-2xl text-slate-600">
          Simplified<span className="text-indigo-500">.ninja</span>
        </h1>
      </div>
      <ul className="mt-8 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.title}>
            <NavLink
              className={({ isActive }) =>
                "flex gap-2 items-center text-base p-2 rounded " +
                (isActive ? "bg-indigo-500 text-white" : "text-slate-600")
              }
              to={link.route}
            >
              <link.icon className="w-5" />
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
