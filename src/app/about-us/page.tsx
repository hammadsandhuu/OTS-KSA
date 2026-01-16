import AboutUsLightMain from '@/pages/about/about-us/AboutUsLightMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agntix - About Us",
};

const page = () => {
    return (
        <AboutUsLightMain />
    );
};

export default page;