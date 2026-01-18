import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import AboutUsHero from '@/components/hero-banner/AboutUsHero';
import AboutUsBanner from '@/components/banner/AboutUsBanner';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import HomeMainFooter from '@/layouts/footers/HomeMainFooter';
import HomeMainAbout from '@/components/about/HomeMainAbout';
import AboutUsBrand from '@/components/brand/AboutUsBrand';
import ServiceProcessArea from '@/components/process/ServiceProcessArea';
import CreativeStudioFooter from '@/layouts/footers/CreativeStudioFooter';
import CorporateAgencyService from '@/components/service/CorporateAgencyService';
import CreativeStudioBrand from '@/components/brand/CreativeStudioBrand';
import CreativeStudioTestimonial from '@/components/testimonial/CreativeStudioTestimonial';

const AboutUsLightMain = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider>
                <AnimationWrapper>
                    {/* -- Begin magic cursor -- */}
                    <div id="magic-cursor" className="cursor-bg-red-2">
                        <div id="ball"></div>
                    </div>
                    <BackToTop />
                    <InnerPageHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            <main>
                                <AboutUsHero />
                                <AboutUsBrand />
                                <AboutUsBanner />
                                <HomeMainAbout bgColur='#F6F6F9' spacingCls='pb-140' />
                                {/* <CorporateAgencyService /> */}
                                <ServiceProcessArea />
                                <CreativeStudioBrand />
                                <CreativeStudioTestimonial />
                            </main>
                            <CreativeStudioFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default AboutUsLightMain;