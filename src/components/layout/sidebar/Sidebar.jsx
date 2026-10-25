import { useState } from "react";
import { mainMenu } from "../../../Config/Config";
import MenuItem from "./MenuItem";

function Sidebar({ collapsed, isMobile, setIsMobile }) {
  const [isHover, setIsHover] = useState(false);

  const isMinimize = !collapsed || isHover;

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setIsMobile(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen flex-col
          border-r border-gray-200 bg-white px-4 pt-6
          transition-all duration-300 ease-in-out
          lg:sticky lg:z-20
          ${isMinimize ? "w-64" : "w-[72px]"}
          ${isMobile ? "translate-x-0 m-1.5 rounded-3xl" : "-translate-x-full"}
          lg:translate-x-0
        `}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {/* Logo */}
        <div className="ml-3 flex h-16 items-center gap-2">
          <img
            src="https://mypihub.web.app/static/media/logo-ct.71dc3cd8882014cd0536.png"
            alt="MyPatientHUB Logo"
            className="h-8 w-8 object-contain"
          />

          {isMinimize && (
            <span className="text-sm font-normal text-gray-900">
              MyPatientHUB
            </span>
          )}
        </div>

        <hr className="my-3 border-gray-200" />

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {mainMenu.map((item) => (
            <MenuItem
              key={item.path}
              path={item.path}
              collapsed={isMinimize}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
