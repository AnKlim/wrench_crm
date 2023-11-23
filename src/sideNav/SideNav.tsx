import { Link, useMatches } from "react-router-dom";
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
    <li key={text}>
      <div className="menuItemLabel">
        {icon}
        <p>{text}</p>
      </div>
    </li>
  );
};

const MenuItem = ({ text, icon, path }: MenuItemProps) => {
  return (
    <li key={text}>
      <Link to={path}>
        {icon}
        <p>{text}</p>
      </Link>
    </li>
  );
};

const ParentMenuItem = ({ text, icon, childMenuItems }: ParentMenuItemProps) => {
  //   const pathMatches = useMatches();

  //   // Expand the parent item by default if the current path matches the path of any of the child menu items
  //   const expandedByDefault = !!pathMatches.find(({ pathname }) =>
  //     childMenuItems?.find(({ path }) => pathname.startsWith(path))
  //   );

  //   const [isExpanded, setIsExpanded] = useState(expandedByDefault);

  return (
    <>
      <MenuItemLabel icon={icon} text={text} />
      <li>
        <ul className="childMenuItems">
          {childMenuItems?.map(({ text, icon, path }) => (
            <MenuItem key={text} icon={icon} text={text} path={path || ""} />
          ))}
        </ul>
      </li>
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
