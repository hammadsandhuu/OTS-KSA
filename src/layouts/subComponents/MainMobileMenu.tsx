import headerMenuData from '@/data/header-menu/menuData';
import { useState } from 'react';
import Link from 'next/link';

const MainMobileMenu = () => {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);

    const toggleMenu = (id: number) => {
        if (activeMenu === id) {
            setActiveMenu(null);
        } else {
            setActiveMenu(id);
        }
    };

    return (
        <>
            <ul>
                {headerMenuData.map((menuItem) => (
                    <li key={menuItem.id} className={`${menuItem.hasDropdown || menuItem.submenus ? 'has-dropdown' : ''} ${activeMenu === menuItem.id ? 'active' : ''}`}>
                        {menuItem.submenus && menuItem.submenus.length > 0 ? (
                            <Link href="#" onClick={(e) => {
                                e.preventDefault();
                                toggleMenu(menuItem.id);
                            }}>
                                {menuItem.title}
                            </Link>
                        ) : (
                            <Link href={menuItem.link || "#"}>
                                {menuItem.title}
                            </Link>
                        )}

                        {menuItem.submenus && menuItem.submenus.length > 0 && (
                            <ul className="tp-submenu submenu" style={{ display: `${activeMenu === menuItem.id ? 'block' : 'none'}` }}>
                                {menuItem.submenus.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <Link href={subItem.link || "#"}>
                                            {subItem.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {menuItem.submenus && menuItem.submenus.length > 0 && (
                            <button
                                className={`tp-menu-close ${activeMenu === menuItem.id ? 'active' : ''}`}
                                onClick={() => toggleMenu(menuItem.id)}
                            >
                                <i className="fa-solid fa-plus"></i>
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MainMobileMenu;