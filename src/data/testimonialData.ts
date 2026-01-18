import { TestimonialDT } from "@/types/testimonial-d-t";
import avaterOne from "../../public/assets/img/avater/avater-1.png";
import avaterTwo from "../../public/assets/img/avater/avater-2.png";
import avaterThree from "../../public/assets/img/avater/avater-3.jpg";
import avaterFour from "../../public/assets/img/avater/avater-4.jpg";
import avaterFive from "../../public/assets/img/avater/avater-5.jpg";
import avaterSix from "../../public/assets/img/avater/avater-6.jpg";
//home four avater image
import avater7 from "../../public/assets/img/home-04/avater/avater-1.jpg";
import avater8 from "../../public/assets/img/home-04/avater/avater-3.jpg";
import avater9 from "../../public/assets/img/home-04/avater/avater-4.jpg";
import avater10 from "../../public/assets/img/home-04/avater/avater-5.jpg";
//home 10 images
import testimonial1 from '../../public/assets/img/home-10/testimonial/testimonial-item-1.png';
import testimonial2 from '../../public/assets/img/home-10/testimonial/testimonial-item-2.png';
import testimonial3 from '../../public/assets/img/home-10/testimonial/testimonial-item-3.png';
import testimonial4 from '../../public/assets/img/home-10/testimonial/testimonial-item-4.png';
//Home IT Solution testimonial images
import testiImg from '../../public/assets/img/home-11/testimonial/testi-img-1.jpg';
import testiBrand from '../../public/assets/img/home-11/testimonial/testi-brand-1.jpg';
//Home cripto currency testimonial envato logo
import envatoLogo from '../../public/assets/img/home-13/testimonial/envato.png';
//shop modern testimonial user image
import userImg1 from "../../public/assets/img/product/product-details-main/desc/user-3.jpg"
import userImg2 from "../../public/assets/img/product/product-details-main/desc/user-4.jpg"
import userImg3 from "../../public/assets/img/product/product-details-main/desc/user-5.jpg"
import userImg4 from "../../public/assets/img/product/product-details-main/desc/user-6.jpg"
import userImg5 from "../../public/assets/img/product/product-details-main/desc/user-7.jpg"
import userImg6 from "../../public/assets/img/product/product-details-main/desc/user-1.jpg"
import userImg7 from "../../public/assets/img/product/product-details-main/desc/user-2.jpg"

const testimonialsData: TestimonialDT[] = [
    {
        id: 1,
        quote: "Ocean Trading Services consistently delivers reliable shipping solutions. Their industry knowledge and attention to detail set them apart.",
        name: "Albert Juan",
        position: "Managing Director, Archin Group",
        avatar: avaterOne,
        style: "white-style"
    },
    {
        id: 2,
        quote: "Their team handled our international shipments with precision and professionalism. Communication was clear from start to finish.",
        name: "Koen Chegg",
        position: "Operations Head, Global Exports",
        avatar: avaterTwo,
        style: "green-style"
    },
    {
        id: 3,
        quote: "We value Ocean Trading Services as a long-term logistics partner. They understand our business and always deliver on time.",
        name: "Warren Daniel",
        position: "Supply Chain Director",
        avatar: avaterThree,
        style: "black-style"
    },
    {
        id: 4,
        quote: "From documentation to delivery, everything was handled seamlessly. A dependable trading and logistics partner.",
        name: "Elvin Bond",
        position: "CEO, Maritime Solutions",
        avatar: avaterFour,
        style: "white-style"
    },
    {
        id: 5,
        quote: "Their expertise in ocean freight and compliance gave us complete confidence throughout the shipment process.",
        name: "Abbas",
        position: "Import Manager",
        avatar: avaterFive,
        style: "grey-style"
    },
    {
        id: 6,
        quote: "Professional, responsive, and highly experienced. Ocean Trading Services made international shipping effortless.",
        name: "Jessamine Mumtaz",
        position: "Procurement Lead",
        avatar: avaterSix,
        style: "green-style"
    },

    // home four testimonials
    {
        id: 8,
        avatar: avater7,
        name: "Bradley Gordon",
        position: "Logistics Manager",
        rating: 5,
        quote: "Ocean Trading Services went above and beyond to ensure our cargo arrived safely and on schedule."
    },
    {
        id: 9,
        avatar: avater8,
        name: "Tisha Norton",
        position: "Operations Director",
        rating: 5,
        quote: "Their attention to detail and proactive communication made a real difference."
    },
    {
        id: 10,
        avatar: avater9,
        name: "Emma Berger",
        position: "International Trade Manager",
        rating: 5,
        quote: "A smooth, transparent process from booking to final delivery."
    },
    {
        id: 11,
        avatar: avater10,
        name: "Mary Cruz",
        position: "Supply Chain Consultant",
        rating: 5,
        quote: "Reliable service backed by real industry expertise."
    },

    // corporate-style testimonials
    {
        id: 12,
        name: "Andrew Gross",
        position: "CEO & Co-Founder",
        rating: 5.0,
        quote: "Their efficiency and fast turnaround helped us meet critical shipping deadlines."
    },
    {
        id: 13,
        name: "Matthew Blake",
        position: "Chief Executive Officer",
        rating: 5.0,
        quote: "A highly professional team with excellent global trade knowledge."
    },
    {
        id: 14,
        name: "Jonathan Cross",
        position: "Founder & Chief Executive",
        rating: 5.0,
        quote: "Everything was handled smoothly, even under tight timelines."
    },
    {
        id: 15,
        name: "Benjamin Hayes",
        position: "CEO & Head of Innovation",
        rating: 5.0,
        quote: "Exceptional coordination across ports and partners."
    },

    // corporate-agency-light
    {
        id: 22,
        quote: "Ocean Trading Services is more than a supplier — they are a trusted logistics partner who supports us at every stage.",
        name: "Mike David",
        role: "Trade Operations Manager"
    },
    {
        id: 23,
        quote: "Outstanding service and consistent reliability across all our shipments.",
        name: "Sarah Johnson",
        role: "Procurement Manager"
    },
    {
        id: 24,
        quote: "Their expertise in international shipping has significantly improved our supply chain efficiency.",
        name: "James Wilson",
        role: "Chief Executive Officer"
    },

    // modern testimonials
    {
        id: 51,
        quote: "Clear communication, reliable timelines, and professional handling throughout.",
        name: "John Deo",
        avatar: userImg1
    },
    {
        id: 52,
        quote: "Their team kept everything on track and ensured full compliance at every step.",
        name: "James Fox",
        avatar: userImg2
    },
    {
        id: 53,
        quote: "We felt supported throughout the entire shipping process.",
        name: "Mark Lee",
        avatar: userImg3
    },
    {
        id: 54,
        quote: "A dependable partner with strong global reach.",
        name: "Paul Ray",
        avatar: userImg4
    },
    {
        id: 55,
        quote: "Professional, efficient, and easy to work with.",
        name: "Farhan Firoz",
        avatar: userImg5
    }
];

export default testimonialsData;