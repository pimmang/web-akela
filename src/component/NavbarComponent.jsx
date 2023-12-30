import Logo from "../assets/logo.svg";

const NavbarComponent = () => {
  return (
    <div className="navbar w-100 d-flex align-items-center">
      <div className="d-flex align-items-center gap-1">
        <div style={{ width: "8rem" }}>
          <img src={Logo} alt="Logo" className="img-fluid" />
        </div>
      </div>
      <div className="d-flex align-items-center gap-2">
        <a href="https://wa.me/+6285342677431">
          <i className="ph-fill ph-whatsapp-logo fs-4"></i>
        </a>
      </div>
    </div>
  );
};

export default NavbarComponent;
