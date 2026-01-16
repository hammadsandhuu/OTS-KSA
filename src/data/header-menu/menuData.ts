import { MenuItem } from "@/types/menu-d-t";

const headerMenuData: MenuItem[] = [
    {
        id: 1,
        active: true,
        title: "Home",
        link: "/",
        pluseIncon: false,
        hasDropdown: false,
    },
    {
        id: 2,
        active: true,
        title: "About",
        link: "/about-us",
        pluseIncon: false,
    },
    {
        id: 3,
        hasDropdown: false, 
        active: true,
        children: false, 
        title: "Services",
        pluseIncon: false, 
        link: "/services",
        submenus: [
            {
                title: "Door to Door Shipping",
                link: "/services/door-to-door-shipping",
                pluseIncon: false
            },
            {
                title: "ExWorks Shipping (With Origin Support)",
                link: "/services/exworks-shipping",
                pluseIncon: false
            },
            {
                title: "Flexible FOB Solutions",
                link: "/services/flexible-fob-solutions",
                pluseIncon: false
            },
            {
                title: "Custom & Transportation Solutions",
                link: "/services/custom-and-transportation-solutions",
                pluseIncon: false
            }
        ]
    },
    {
        id: 4,
        hasDropdown: false, 
        active: true,
        children: false, 
        title: "Sectors",
        pluseIncon: false, 
        link: "/sectors",
        submenus: [
            {
                title: "Luxury Automotive",
                link: "/sectors/luxury-automotive",
                pluseIncon: false
            },
            {
                title: "Oil & Gas",
                link: "/sectors/oil-and-gas",
                pluseIncon: false
            },
            {
                title: "Mega Projects",
                link: "/sectors/mega-projects",
                pluseIncon: false
            },
            {
                title: "Materials & Manufacturing",
                link: "/sectors/materials-and-manufacturing",
                pluseIncon: false
            },
            {
                title: "Hospitality & Leisure",
                link: "/sectors/hospitality-and-leisure",
                pluseIncon: false
            },
            {
                title: "Furniture & Fixtures",
                link: "/sectors/furniture-and-fixtures",
                pluseIncon: false
            },
            {
                title: "Food & Commodities",
                link: "/sectors/food-and-commodities",
                pluseIncon: false
            },
            {
                title: "Diplomatic Missions",
                link: "/sectors/diplomatic-missions",
                pluseIncon: false
            }
        ]
    },
    {
        id: 5,
        active: true,
        title: "How it Works",
        link: "/how-it-works",
        pluseIncon: false,
    },
    {
        id: 6,
        active: true,
        title: "Contact",
        link: "/contact",
        pluseIncon: false,
    }
];

export default headerMenuData;
