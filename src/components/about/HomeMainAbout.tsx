import aboutShape from "../../../public/assets/img/home-01/about/about-shape-1.png"
import aboutImgOne from "../../../public/assets/img/home-01/about/about.png"
import aboutAvater from "../../../public/assets/img/home-01/about/about-avater.png"
import HomeMainCounter from "../counter/HomeMainCounter";
import Image from "next/image";

interface aboutPropsDT {
    bgColur?: string;
    spacingCls?: string
}

const HomeMainAbout = ({ bgColur, spacingCls = "pb-120" }: aboutPropsDT) => {
    return (
        <div className={`tp-about-area pt-140 ${spacingCls} tp-bounce-trigger`} style={{ backgroundColor: bgColur }}>
            <div className="container">
                <div className="tp-about-box p-relative">
                    <div className="tp-about-shape-1 tp-bounce d-none d-md-block">
                        <Image style={{ width: "100%", height: "auto" }} src={aboutShape} alt="about-shape" />
                    </div>
                    <div className="row">
                        <div className="col-xl-3">
                            <div className="tp-about-title-box">
                                <span className="tp-section-subtitle pre tp_fade_anim">WHO WE ARE</span>
                            </div>
                        </div>

                        <div className="col-xl-9">
                            <div className="tp-about-wrap">
                                <div className="tp-about-text tp_fade_anim">
                                    <p>
                                    An independent ocean trading services company who care, build long-term relationships, have deep industry experience, and deliver trusted results.
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-xl-5 col-lg-4 col-md-5">
                                        <div className="tp-about-thumb">
                                            <Image style={{ width: "100%", height: "auto" }} data-speed=".8" src={aboutImgOne} alt="about-image" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-8 col-md-7">
                                        <div className="tp-about-funcact-wrap">
                                            <div className="tp-about-avater-info">
                                                <div className="tp_text_anim">
                                                    <p>Driven by a passion for innovation, we specialize in <br /> delivering top-quality ocean trading services</p>
                                                </div>
                                            </div>
                                            {/* counter area */}
                                            <HomeMainCounter />
                                            {/* counter area end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMainAbout;