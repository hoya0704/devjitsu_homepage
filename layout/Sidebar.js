import React from 'react';
//import Link from 'next/link';
import './Sidebar.scss';

const Sidebar = props => {
    const { menus } = props;
    menus.map(menu => {
        menu.key = `nav-link-${menu.href}-${menu.label}`;
        return menu;
    });
    return (
        <section id="sidebar">
            <div className="inner">
                <nav>
                    <ul>
                        {/* <li>
                            <Link href="/">
                            <a>Home</a>
                            </Link>
                        </li> */}
                        {menus.map(({ key, href, label }) => (
                            <li key={key}>
                                <a href={href}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Sidebar;