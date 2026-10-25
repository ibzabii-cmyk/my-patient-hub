
import { NavLink } from "react-router-dom";

function MenuItem({ title, icon: Icon, collapsed, path }) {
  return (
    <NavLink to={path} title={!collapsed ? title : ""}>
      {({ isActive }) => (
        <div
          className={`flex w-full items-center gap-3 rounded-lg px-2 py-1 text-sm transition-all duration-300 ${
            isActive ? "bg-gray-100 font-medium text-[#344767]" : "text-gray-600"
          }`}
        >
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg shadow-sm transition-colors duration-300 ${
              isActive
                ? "bg-[#cb0c9f] text-white"
                : "bg-white text-gray-500"
            }`}
          >
            <Icon size={20} />
          </div>

          {collapsed && <span>{title}</span>}
        </div>
      )}
    </NavLink>
  );
}

export default MenuItem;
