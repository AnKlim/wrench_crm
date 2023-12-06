import { NavLink, useMatches } from "react-router-dom";
import { CalendarIcon } from "../assets/icons/CalendarIcon";
import { ExitIcon } from "../assets/icons/ExitIcon";
import { FinanceIcon } from "../assets/icons/FinanceIcon";
import { MainIcon } from "../assets/icons/MainIcon";
import { MapIcon } from "../assets/icons/MapIcon";
import { ProfileIcon } from "../assets/icons/ProfileIcon";
import { SearchIcon } from "../assets/icons/SearchIcon";
import { SettingIcon } from "../assets/icons/SettingIcon";
import { TableIcon } from "../assets/icons/TableIcon";
import { WidgetIcon } from "../assets/icons/WidgetIcon";
import "./SideNav.scss";
import { useState } from "react";

interface MenuItemLabelProps {
  text: string;
  icon: JSX.Element;
}

interface MenuItemProps extends MenuItemLabelProps {
  path: string;
}

interface ParentMenuItemProps extends MenuItemLabelProps {
  path?: string;
  childMenuItems?: MenuItemProps[];
}

const sideNavMenuItems: ParentMenuItemProps[] = [
  {
    text: "Главная",
    icon: <MainIcon />,
    path: "/",
  },
  {
    text: "Поиск адресов",
    icon: <SearchIcon color="black" />,
    path: "/search",
  },
  {
    text: "Таблицы",
    icon: <TableIcon />,
    path: "/tables",
  },
  {
    text: "Календарь",
    icon: <CalendarIcon />,
    path: "/calendar",
  },
  {
    text: "Карты",
    icon: <MapIcon />,
    path: "/maps",
  },
  {
    text: "Виджеты",
    icon: <WidgetIcon />,
    path: "/widgets",
  },
  {
    text: "Настройки",
    icon: <SettingIcon />,
    childMenuItems: [
      {
        text: "Настройки профиля",
        icon: <ProfileIcon />,
        path: "/profile",
      },
      {
        text: "Управление финансами",
        icon: <FinanceIcon />,
        path: "/finances",
      },
    ],
  },
  {
    text: "Выход",
    icon: <ExitIcon />,
  },
];

const MenuItemLabel = ({ text, icon }: MenuItemLabelProps) => {
  return (
    <div className="menuItemLabel">
      {icon}
      <p>{text}</p>
    </div>
  );
};

const MenuItem = ({ text, icon, path }: MenuItemProps) => {
  return (
    <li key={text}>
      <NavLink to={path}>
        {icon}
        <p>{text}</p>
      </NavLink>
    </li>
  );
};

const ParentMenuItem = ({ text, icon, childMenuItems }: ParentMenuItemProps) => {
  const pathMatches = useMatches();

  // Expand the parent item by default if the current path matches the path of any of the child menu items
  const expandedByDefault = !!pathMatches.find(({ pathname }) =>
    childMenuItems?.find(({ path }) => pathname.startsWith(path))
  );

  const [isExpanded, setIsExpanded] = useState(expandedByDefault);

  return (
    <>
      <li className="parentMenuItem" onClick={() => setIsExpanded(!isExpanded)}>
        <MenuItemLabel icon={icon} text={text} />
        {isExpanded ? (
          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.06699 0.749999C6.25944 0.416666 6.74056 0.416667 6.93301 0.75L12.5622 10.5C12.7546 10.8333 12.5141 11.25 12.1292 11.25H0.870834C0.485934 11.25 0.245372 10.8333 0.437822 10.5L6.06699 0.749999Z"
              fill="#A8A8A8"
            />
          </svg>
        ) : (
          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.437895 1.49999C0.245445 1.16665 0.486008 0.749988 0.870908 0.749988L12.1292 0.749988C12.5141 0.749988 12.7547 1.16665 12.5623 1.49999L6.93309 11.25C6.74064 11.5833 6.25951 11.5833 6.06706 11.25L0.437895 1.49999Z"
              fill="#A8A8A8"
            />
          </svg>
        )}
      </li>
      {isExpanded && (
        <li>
          <ul className="childMenuItems">
            {childMenuItems?.map(({ text, icon, path }) => (
              <MenuItem key={text} icon={icon} text={text} path={path || ""} />
            ))}
          </ul>
        </li>
      )}
    </>
  );
};

export const SideNav = () => {
  return (
    <aside>
      <h2>Меню</h2>
      <nav>
        <ul>
          {sideNavMenuItems.map(({ text, icon, path, childMenuItems }) =>
            childMenuItems ? (
              <ParentMenuItem key={text} icon={icon} text={text} childMenuItems={childMenuItems} />
            ) : (
              <MenuItem key={text} icon={icon} text={text} path={path || ""} />
            )
          )}
        </ul>
      </nav>
    </aside>
  );
};
