import { SocialLinks } from 'components/SocialLinks';

export const AppFooter: React.FC = () => (
  <footer className="site-footer" id="contact">
    <h2 className="site-footer__lead-txt">Reach out to me!</h2>

    <p className="site-footer__txt">
      Do you want us to work together? Maybe you just want to say Hello!
      <br /> Don&apos;t be shy, you can reach out to me anytime.
    </p>

    <SocialLinks direction="column" />
  </footer>
);
