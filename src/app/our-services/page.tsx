
import ServiceTwoMain from '@/pages/services/service-2/ServiceTwoMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Services - OTS Logistics",
};

const page = () => {
    return (
        <ServiceTwoMain />
    );
};

export default page;