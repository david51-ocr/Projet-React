import logoKasa from "../../assets/Logo-Kasa-white.png";
import "../../styles/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__logo"
        src={logoKasa}
        alt="Logo Kasa"
      />

      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;