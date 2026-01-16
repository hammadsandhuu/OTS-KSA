import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import HomeMainService from '@/components/service/HomeMainService';
import HomeMainHero from '@/components/hero-banner/HomeMainHero';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import HomeMainAbout from '@/components/about/HomeMainAbout';
import HomeMainHeader from '@/layouts/headers/HomeMainHeader';
import HomeMainWork from '@/components/work/HomeMainWork';
import CreativeStudioAbout from '@/components/about/CreativeStudioAbout';
import CreativeStudioChoose from '@/components/choose-area/CreativeStudioChoose';
import CreativeStudioTestimonial from '@/components/testimonial/CreativeStudioTestimonial';
import CreativeStudioFooter from '@/layouts/footers/CreativeStudioFooter';
import CreativeStudioBlog from '@/components/blog/CreativeStudioBlog';
import CreativeStudioBrand from '@/components/brand/CreativeStudioBrand';

const HomeMain = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider>
                <AnimationWrapper>
                    <div id="magic-cursor" className="cursor-white-bg">
                        <div id="ball"></div>
                    </div>
                    {/* Global Components */}
                    <BackToTop />
                    <HomeMainHeader />
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {/* Main Content Sections */}
                            <main>
                                <HomeMainHero />
                                <HomeMainAbout />
                                <CreativeStudioAbout />    
                                <HomeMainService />
                                <HomeMainWork />
                                <CreativeStudioChoose />
                                <CreativeStudioTestimonial />
                                <CreativeStudioBrand />
                                <CreativeStudioBlog />
                            </main>
                            <CreativeStudioFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default HomeMain;
