import { SocialLinks } from '@/components/SocialLinks';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero" id="content">
      <div className="hero__left">
        <h2 className="hero__lead-text">
          My name is{' '}
          <span className="hero__lead-text--highlight">Maverick</span>.
        </h2>

        <h3 className="hero__tag-text">I code for fun, and as a job.</h3>

        <p className="hero__desc-text">
          <span aria-label="emoji wave" role="img">
            👋🏽
          </span>{' '}
          Hey there! I&apos;m Maverick, a Software Developer with a primary
          focus on Frontend Engineering. <br />
          Welcome to my little corner of the web, where I share notes, code
          snippets, and resources on topics that interest me.
        </p>

        <div className="hero__btn">
          {/* <AppLink
            icon={chevronRight}
            text="Contact Me"
            title="Send me an email"
            href="mailto:supacode@gmail.com"
          /> */}
        </div>
      </div>

      <SocialLinks direction={'stacked'} />
    </section>
  );
};
