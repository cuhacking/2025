import { MLHBadge } from "./MLHBadge";

const links = [
  // {title: "About",
  //   link: "/#about"
  // },
  { title: "FAQ", link: "/#faq" },
  { title: "Sponsors", link: "/#sponsors" },
  // {title: "Join Us",
  //   link: ""
  // }
];

export const NavBar = (props: { children: React.ReactNode }) => {
  return (
    <div id="navbar" className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Nav />
        {/* Contents of the page */}
        {props.children}
      </div>
      <Drawer />
    </div>
  );
};

const Nav = () => {
  return (
    <div className="w-full navbar fixed z-50">
      <div className="flex-1 gap-4 flex items-center">
        <a href="">
          <img src="/Logo.svg" className="w-9" alt="Logo" />
          <MLHBadge />
        </a>
      </div>
      <div className="flex-none hidden md:block">
        <NavLinks links={links} className="menu menu-horizontal" />
      </div>
      {/* <ThemeToggle /> */}
      <div className="flex-none md:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          {hamburgerIcon}
        </label>
      </div>
    </div>
  );
};

const Drawer = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <NavLinks
        links={links}
        className="menu p-4 w-80 min-h-full bg-base-200 pt-16 cursor-pointer "
      />
    </div>
  );
};

const NavLinks = (props: {
  className?: string;
  liClassName?: string;
  links: { title: string; link: string }[];
}) => {
  const handleLinkClick = () => {
    const drawerToggle = document.getElementById(
      "my-drawer-3"
    ) as HTMLInputElement;
    if (drawerToggle) {
      drawerToggle.checked = false;
    }
  };

  return (
    <ul className={props.className}>
      {props.links.map((link, index) => (
        <li className={props.liClassName} key={index}>
          <a href={link.link} onClick={handleLinkClick}>
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

// const ThemeToggle = () => {
//   const toggleTheme = () => {
//     document.documentElement.setAttribute(
//       "data-theme",
//       document.documentElement.getAttribute("data-theme") === "dark"
//         ? "light"
//         : "dark"
//     );
//   };

//   return (
//     <label className="swap swap-rotate">
//       <input type="checkbox" onClick={() => toggleTheme()} />
//       {sunIcon}
//       {moonIcon}
//     </label>
//   );
// };

// const sunIcon = (
//   <svg
//     className="swap-off fill-current w-6 h-6"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//   >
//     <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//   </svg>
// );

// const moonIcon = (
//   <svg
//     className="swap-on fill-current w-6 h-6"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//   >
//     <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//   </svg>
// );

const hamburgerIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="inline-block w-6 h-6 stroke-current"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
  </svg>
);
