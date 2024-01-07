const SosmedComponent = () => {
  return (
    <div className="w-100 mt-4 sosmed" id="sosmed">
      <div className="d-flex gap-2 align-items-center mb-4">
        <div className="list"></div>
        <h1 className="fw-bold">Hubungi Kami di Sini</h1>
      </div>
      <div className="w-100 d-flex align-items-center justify-content-evenly sosmed-container">
        <div className="sosmed-items">
          <a href="https://instagram.com/akela_printis">
            <img
              src="https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="instagram"
              className="img-fluid"
            />
          </a>
        </div>
        <div className="sosmed-items">
          <a href="https://wa.me/+6285342677431">
            <img
              src="https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="whatsapp"
              className="img-fluid"
            />
          </a>
        </div>
        <div className="sosmed-items">
          <a href="https://www.tiktok.com/@akela_printis?is_from_webapp=1&sender_device=pc">
            <img
              src="https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="tiktok"
              className="img-fluid"
            />
          </a>
        </div>
        <div className="sosmed-items">
          <a href="https://x.com/FirmanAja_?t=FaSqkdPlQveMXm_wpq0Txw&s=09">
            <img
              src="https://images.unsplash.com/photo-1690138871287-02b2fc3b87c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="x"
              className="img-fluid"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SosmedComponent;
