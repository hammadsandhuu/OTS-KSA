import { blogDT } from "@/types/blog-d-t";
import blog1 from "../../public/assets/img/home-03/blog/blog-1.jpg";
import blog2 from "../../public/assets/img/home-03/blog/blog-2.jpg";
import blog3 from "../../public/assets/img/home-03/blog/blog-3.jpg";
//creative studio light home blog img
import blog4 from "../../public/assets/img/home-04/blog/blog-1.jpg";
import blog5 from "../../public/assets/img/home-04/blog/blog-2.jpg";
import blog6 from "../../public/assets/img/home-04/blog/blog-3.jpg";
//  architecture hub light home blog image
import blog7 from "../../public/assets/img/home-08/blog/blog-1.jpg";
import blog8 from "../../public/assets/img/home-08/blog/blog-2.jpg";
import blog9 from "../../public/assets/img/home-08/blog/blog-3.jpg";
import blog10 from "../../public/assets/img/home-08/blog/blog-4.jpg";
//  architecture hub light home blog image
import blog11 from "../../public/assets/img/home-07/blog/blog-1.jpg";
import blog12 from "../../public/assets/img/home-07/blog/blog-2.jpg";
import blog13 from "../../public/assets/img/home-07/blog/blog-3.jpg";
//  architecture hub light home blog image
import blog14 from "../../public/assets/img/home-09/blog/blog-1.jpg";
import blog15 from "../../public/assets/img/home-09/blog/blog-2.jpg";
import blog16 from "../../public/assets/img/home-09/blog/blog-3.jpg";
//  crypto currency home blog image
import blog17 from "../../public/assets/img/home-13/blog/blog-thumb-1.jpg";
import blog18 from "../../public/assets/img/home-13/blog/blog-thumb-2.jpg";
import blog19 from "../../public/assets/img/home-13/blog/blog-thumb-3.jpg";
//  crypto currency home blog image
import blog20 from "../../public/assets/img/home-12/blog/st-blog-1.jpg";
import blog21 from "../../public/assets/img/home-12/blog/st-blog-2.jpg";
import blog22 from "../../public/assets/img/home-12/blog/st-blog-3.jpg";
//blog sidebar image 
import blog23 from "../../public/assets/img/blog/blog-standard/blog-rp-1.jpg";
import blog24 from "../../public/assets/img/blog/blog-standard/blog-rp-2.jpg";
import blog25 from "../../public/assets/img/blog/blog-standard/blog-rp-3.jpg";
//blog list image
import blog26 from "../../public/assets/img/blog/blog-list/blog-list-1.jpg";
import blog27 from "../../public/assets/img/blog/blog-list/blog-list-2.jpg";
import blog28 from "../../public/assets/img/blog/blog-list/blog-list-3.jpg";
import blog29 from "../../public/assets/img/blog/blog-list/blog-list-4.jpg";
//blog grid 2 col image
import authorImg1 from "../../public/assets/img/blog/blog-masonry/blog-masonry-user-1.jpg";
import authorImg2 from "../../public/assets/img/blog/blog-masonry/blog-masonry-user-3.jpg";
import authorImg3 from "../../public/assets/img/blog/blog-masonry/blog-masonry-user-2.jpg";
import authorImg4 from "../../public/assets/img/blog/blog-masonry/blog-masonry-user-4.jpg";
import authorImg5 from "../../public/assets/img/blog/blog-masonry/blog-masonry-user-5.jpg";
import authorImg6 from "../../public/assets/img/blog/blog-masonry/blog-masonry-user-6.jpg";
import authorImg7 from "../../public/assets/img/blog/blog-masonry/blog-masonry-user-7.jpg";
import blog30 from "../../public/assets/img/blog/blog-masonry/blog-masonry-thumb-1.jpg";
import blog31 from "../../public/assets/img/blog/blog-masonry/blog-masonry-thumb-3.jpg";
import blog32 from "../../public/assets/img/blog/blog-masonry/blog-masonry-thumb-2.jpg";
import blog33 from "../../public/assets/img/blog/blog-masonry/blog-masonry-thumb-4.jpg";
import blog34 from "../../public/assets/img/blog/blog-masonry/blog-masonry-thumb-7.jpg";
import blog35 from "../../public/assets/img/blog/blog-masonry/blog-masonry-thumb-8.jpg";
import blog36 from "../../public/assets/img/blog/blog-masonry/blog-masonry-thumb-5.jpg";
import blog37 from "../../public/assets/img/blog/blog-masonry/blog-masonry-thumb-6.jpg";


const blogData: blogDT[] = [
    {
        id: 1,
        author: "Damien Cabral",
        date: "Dec 10, 2025",
        category: "Logistics",
        title: "Simplifying global shipping through smart logistics planning.",
        image: blog1,
        link: "/blog-details-light",
    },
    {
        id: 2,
        author: "Elvin Bond",
        date: "Sep 3, 2025",
        category: "Ocean Freight",
        title: "How efficient ocean freight drives international trade success.",
        image: blog2,
        link: "/blog-details-light",
    },
    {
        id: 3,
        author: "Ronald Lara",
        date: "Aug 3, 2025",
        category: "Global Trade",
        title: "Reducing complexity in international trade operations.",
        image: blog3,
        link: "/blog-details-light",
    },

    // operations & culture
    {
        id: 4,
        image: blog4,
        category: "Operations",
        date: "May 15, 2025",
        title: "Building strong logistics teams for global operations",
        link: "/blog-details-light",
    },
    {
        id: 5,
        image: blog5,
        category: "Supply Chain",
        date: "May 15, 2025",
        title: "Creating resilient supply chains in volatile markets",
        link: "/blog-details-light",
    },
    {
        id: 6,
        image: blog6,
        category: "Operations",
        date: "May 15, 2025",
        title: "Improving coordination across ports and partners",
        link: "/blog-details-light",
    },

    // shipping insights
    {
        id: 7,
        image: blog7,
        category: 'Ocean Freight',
        title: 'Managing complex international shipping routes',
        date: 'September 27, 2025',
        delay: '.3',
        link: "/blog-details-light"
    },
    {
        id: 8,
        image: blog8,
        category: 'Trade Compliance',
        title: 'Overcoming customs challenges in global trade',
        date: 'September 27, 2025',
        delay: '.4',
        link: "/blog-details-light"
    },
    {
        id: 9,
        image: blog9,
        category: 'Logistics',
        title: 'Optimising cargo movement across borders',
        date: 'September 27, 2025',
        delay: '.5',
        link: "/blog-details-light"
    },
    {
        id: 10,
        image: blog10,
        category: 'Supply Chain',
        title: 'The future of global shipping and logistics',
        date: 'September 27, 2025',
        delay: '.6',
        link: "/blog-details-light"
    },

    // insights & guides
    {
        id: 11,
        title: 'Do you fully understand your shipping costs?',
        excerpt: 'Breaking down freight charges and hidden costs',
        category: 'Insights',
        date: 'Apr 21, 2025',
        image: blog11,
        commentCount: 0,
        link: "/blog-details-light"
    },
    {
        id: 12,
        title: 'How to improve shipment visibility',
        excerpt: 'Tracking, reporting, and transparency explained',
        category: 'Logistics',
        date: 'Apr 17, 2025',
        image: blog12,
        commentCount: 0,
        link: "/blog-details-light"
    },
    {
        id: 13,
        title: 'Measuring success in international trade operations',
        excerpt: 'KPIs every trading company should track',
        category: 'Business',
        date: 'Apr 25, 2025',
        image: blog13,
        commentCount: 0,
        link: "/blog-details-light"
    },

    // corporate blog
    {
        id: 14,
        image: blog14,
        date: "Mar 15, 2022",
        title: "Building trust in global trading partnerships",
        categories: ["Trade", "Business"],
        delay: "0.1",
        link: "/blog-details-light"
    },
    {
        id: 15,
        image: blog15,
        date: "Mar 15, 2022",
        title: "Why reliability matters in ocean logistics",
        categories: ["Logistics", "Business"],
        delay: "0.3",
        link: "/blog-details-light"
    },
    {
        id: 16,
        image: blog16,
        date: "Mar 15, 2022",
        title: "Protecting your cargo through smarter planning",
        categories: ["Shipping", "Risk Management"],
        delay: "0.5",
        link: "/blog-details-light"
    },

    // startup & growth
    {
        id: 20,
        title: "Scaling global trade operations efficiently",
        image: blog20,
        category: "Trade Growth",
        date: "Aug 3, 2025",
        link: "/blog-details-light"
    },
    {
        id: 21,
        title: "Solving supply chain bottlenecks in shipping",
        image: blog21,
        category: "Logistics",
        date: "Aug 3, 2025",
        link: "/blog-details-light"
    },
    {
        id: 22,
        title: "How to manage shipping risks effectively",
        image: blog22,
        category: "Risk Management",
        date: "Aug 3, 2025",
        link: "/blog-details-light"
    },

    // sidebar
    {
        id: 23,
        image: blog23,
        category: "Logistics",
        title: "Achieving consistency in international shipping",
        link: "/blog-details-light",
        date: "July 15, 2023",
    },
    {
        id: 24,
        image: blog24,
        category: "Trade",
        title: "Behind the scenes of global trade operations",
        link: "/blog-details-light",
        date: "July 15, 2023",
    },
    {
        id: 25,
        image: blog25,
        category: "Supply Chain",
        title: "Starting strong with global logistics planning",
        link: "/blog-details-light",
        date: "July 15, 2023",
    },
];
export default blogData;
