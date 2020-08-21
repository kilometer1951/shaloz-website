import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "gatsby";

import { useMediaQuery } from "beautiful-react-hooks";
import LanguageProvider from "@deadline/common/LanguageSwitcher/context/language.provider";

import PageWrapper, {
  MainWrapper,
  Logo,
  LeftSection,
  LeftContent,
  NotifyButton,
  ContactFormWrap,
  FooterSection,
  RightSection,
} from "../../common/coming-soon-ui.style";

import LogoImage from "../../common/logoOne.png";

import { SOCIAL_PROFILES } from "../../common/sixteen";

import { SectionsContainer, Section, Header } from "react-fullpage";

import { SocialShare } from "../../SocialShare";

import SubscriptionForm from "../../ContactForm/ContactForm";
import Button from "../../Button";
import CountDownTimer from "../../CountDownTimer";
import About from "../../About";
import Contact from "../../Contact";

const IndexPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [navColor, setNavColor] = useState("primary");
  const isTabletWide = useMediaQuery("(max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  const handleSubsForm = () => {
    setShowForm(true);
  };

  let options = {
    sectionClassName: "section",
    arrowNavigation: true,
    anchors: ["home", "about", "contact"],
    navigation: true,
  };

  return (
    <PageWrapper>
      <MainWrapper>
        <LeftSection>
          <Logo>
            <Link to={"/twentythree"}>
              <img src={LogoImage} alt="logo" />
            </Link>
          </Logo>
          <LeftContent>
            <p className="slogan">
              <FormattedMessage id="ticker" />
            </p>
            <h2>
              <FormattedMessage id="mainMessage" />
            </h2>

            {isTabletWide && (
              <div>
                <CountDownTimer />
              </div>
            )}

            {showForm && (
              <ContactFormWrap>
                <SubscriptionForm />
              </ContactFormWrap>
            )}
            {!showForm && (
              <NotifyButton>
                <Button
                  type="submit"
                  title="notifyText"
                  onClick={handleSubsForm}
                />
              </NotifyButton>
            )}
          </LeftContent>

          <FooterSection>
            <SocialShare items={SOCIAL_PROFILES} />
            <p>
              <FormattedMessage id="copyrightText" />
            </p>
          </FooterSection>
        </LeftSection>

        {isTabletWide && (
          <React.Fragment>
            <About />
            <Contact />
          </React.Fragment>
        )}

        {isDesktop && (
          <RightSection>
            <SectionsContainer {...options}>
              <Section>
                <CountDownTimer />
              </Section>
              <Section>
                <About />
              </Section>
              <Section>
                <Contact />
              </Section>
            </SectionsContainer>
            <Header className="pagination">
              <nav className={`nav-${navColor}`}>
                <a
                  href="#home"
                  className="active"
                  onClick={() => setNavColor("primary")}>
                  <span className="label">Home</span>
                  <span className="dot"></span>
                </a>
                <a href="#about" onClick={() => setNavColor("light")}>
                  <span className="label">About</span>
                  <span className="dot"></span>
                </a>
                <a href="#contact" onClick={() => setNavColor("light")}>
                  <span className="label">Contact</span>
                  <span className="dot"></span>
                </a>
              </nav>
            </Header>
          </RightSection>
        )}
      </MainWrapper>
    </PageWrapper>
  );
};

export default IndexPage;
