import Navbar from '@cuhacking/ui/components/navbar/navbar';
import { NAVBAR_CONSTANTS } from '@cuhacking/ui/components/navbar/navbar.constants';
import Footer from '@cuhacking/ui/components/footer/footer';
import { FOOTER_CONSTANTS } from '@cuhacking/ui/components/footer/footer.constants';

function Layout({ children }) {
  return (
    <div className="">
      <Navbar
        links={NAVBAR_CONSTANTS.LINKS}
        logo={NAVBAR_CONSTANTS.LOGO}
        socials={NAVBAR_CONSTANTS.SOCIALS}
        hamburger={NAVBAR_CONSTANTS.HAMBURGER}
      />
      <div className="py-10">{children}</div>
      <Footer logo={FOOTER_CONSTANTS.LOGO} socials={FOOTER_CONSTANTS.SOCIALS} />
    </div>
  );
}

export default Layout;
