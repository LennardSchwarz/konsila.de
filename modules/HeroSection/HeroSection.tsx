import { SocialLinks } from 'components/SocialLinks';
import { chevronRight } from 'assets/icons';
import { AppLink } from 'components/AppLink';

export const HeroSection: React.FC = () => (
  <section className="hero" id="hero">
    <div className="hero__left">
      <h2 className="hero__lead-text">
        My name is <span className="hero__lead-text--highlight">Lennard</span>.
      </h2>

      <h3 className="hero__tag-text">I code for fun, and as a job.</h3>

      <p className="hero__desc-text">
        <span aria-label="emoji wave" role="img">
          👋🏽
        </span>{' '}
        Hey there! I&apos;m Lennard, a Software Developer with a primary focus
        on backend engineering. <br /> I also do some consulting and freelance
        on the side. Do you need help with your project?
      </p>

      <div className="hero__btn">
        <AppLink
          className="hero__btn--link"
          text="Contact Me"
          title="Send me an email"
          to="mailto:lennard@konsila.de"
          newTab
          asButton
        >
          {chevronRight}
        </AppLink>
      </div>
    </div>

    <SocialLinks />
  </section>
);

HeroSection.displayName = 'modules/HeroSection/';
