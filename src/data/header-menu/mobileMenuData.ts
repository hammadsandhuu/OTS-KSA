// Mobile menu data matching the desktop menu structure
const mobileMenuData = [
    {
        id: 1,
        title: "Home",
        link: "/",
        megaMenu: false,
        submenu: []
    },
    {
        id: 2,
        title: "About",
        link: "/about",
        megaMenu: false,
        submenu: []
    },
    {
        id: 3,
        title: "Services",
        link: "/services",
        megaMenu: false,
        submenu: [
            {
                title: "Door to Door Shipping",
                link: "/services/door-to-door-shipping"
            },
            {
                title: "ExWorks Shipping (With Origin Support)",
                link: "/services/exworks-shipping"
            },
            {
                title: "Flexible FOB Solutions",
                link: "/services/flexible-fob-solutions"
            },
            {
                title: "Custom & Transportation Solutions",
                link: "/services/custom-and-transportation-solutions"
            }
        ]
    },
    {
        id: 4,
        title: "Sectors",
        link: "/sectors",
        megaMenu: false,
        submenu: [
            {
                title: "Luxury Automotive",
                link: "/sectors/luxury-automotive"
            },
            {
                title: "Oil & Gas",
                link: "/sectors/oil-and-gas"
            },
            {
                title: "Mega Projects",
                link: "/sectors/mega-projects"
            },
            {
                title: "Materials & Manufacturing",
                link: "/sectors/materials-and-manufacturing"
            },
            {
                title: "Hospitality & Leisure",
                link: "/sectors/hospitality-and-leisure"
            },
            {
                title: "Furniture & Fixtures",
                link: "/sectors/furniture-and-fixtures"
            },
            {
                title: "Food & Commodities",
                link: "/sectors/food-and-commodities"
            },
            {
                title: "Diplomatic Missions",
                link: "/sectors/diplomatic-missions"
            }
        ]
    },
    {
        id: 5,
        title: "How it Works",
        link: "/how-it-works",
        megaMenu: false,
        submenu: []
    },
    {
        id: 6,
        title: "Contact",
        link: "/contact",
        megaMenu: false,
        submenu: []
    }
];

export default mobileMenuData;