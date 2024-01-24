const MenuComponent = () => {
  return (
    <div className="menu mt-4 d-flex flex-column gap-4">
      <div className="d-flex gap-2 align-items-center">
        <div className="list"></div>
        <h1 className="fw-bold">Menu</h1>
      </div>
      <div className="menu-container d-flex align-items-start flex-wrap p-3 justify-content-evenly">
        <a href="#layanan">
          <div className="d-flex align-items-center justify-content-center gap-1 flex-column">
            <div className="menu-item d-flex flex-column align-items-center">
              <i className="ph-fill ph-package fs-1"></i>
            </div>
            <p>Layanan</p>
          </div>
        </a>
        <a href="https://linktr.ee/Akela_Printis">
          <div className="d-flex align-items-center justify-content-center gap-1 flex-column">
            <div className="menu-item d-flex flex-column align-items-center">
              <i class="ph-fill ph-clipboard-text fs-1"></i>
            </div>
            <p>Portfolio</p>
          </div>
        </a>
        <a href="#sosmed">
          <div className="d-flex align-items-center justify-content-center gap-1 flex-column">
            <div className="menu-item d-flex flex-column align-items-center">
              <i className="ph-fill ph-instagram-logo fs-1"></i>
            </div>
            <p>Social Media</p>
          </div>
        </a>
        <a href="#testi">
          <div className="d-flex align-items-center justify-content-center gap-1 flex-column">
            <div className="menu-item d-flex flex-column align-items-center">
              <i className="ph-fill ph-chat-circle-dots fs-1"></i>
            </div>
            <p>Testimony</p>
          </div>
        </a>
        <a href="#tentang">
          <div className="d-flex align-items-center justify-content-center gap-1 flex-column">
            <div className="menu-item d-flex flex-column align-items-center">
              <i className="ph-fill ph-question fs-1"></i>
            </div>
            <p className="text-center">
              Tentang <br /> Kami
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MenuComponent;
