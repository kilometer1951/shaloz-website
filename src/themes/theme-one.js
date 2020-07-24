import React, { Component } from 'react';

import Header from '../components/HeaderSection/Header';
import HeroSection from '../components/HeroSection/HeroOne';
import FeatureSection from '../components/Features/FeatureOne';
import ServiceSection from '../components/ServiceSection/ServiceOne';
import DiscoverSection from '../components/DiscoverSection/DiscoverOne';
import Work from '../components/WorkSection/Work';
import ScreenshotSection from '../components/ScreenshotSection/ScreenshotsOne';
import ReviewSection from '../components/ReviewSection/ReviewOne';
import PricingSection from '../components/PricingSection/PricingOne';
import FaqSection from '../components/FaqSection/FaqOne';
import Download from '../components/DownloadSection/Download';
import Subscribe from '../components/SubscribeSection/Subscribe';
import Team from '../components/TeamSection/Team';
import ContactSection from '../components/ContactSection/Contact';
import FooterSection from '../components/FooterSection/Footer';

class ThemeOne extends Component {
    render() {
        return (
            <div>
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/logo_2.png"} />
                    <HeroSection />
                    <FeatureSection />
                    <ServiceSection />
                    <DiscoverSection />
                    <Download />
                    <ScreenshotSection />
                    <Subscribe />
                    <ContactSection />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default ThemeOne;

//  <FaqSection />