import { SkipToContent } from 'components/SkipToContent';
import { AppHeader } from 'modules/mainHeader/AppHeader';

type AppLayoutProps = {
  children: React.ReactNode;
  fullHeightFooter?: boolean;
};

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <>
    <SkipToContent to="#content" />

    <AppHeader />

    <div className="app-container">{children}</div>
  </>
);

AppLayout.displayName = 'modules/layout/AppLayout';
