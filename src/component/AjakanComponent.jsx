const AjakanComponent = () => {
  return (
    <div
      className="text-center ajakan w-100 d-flex align-items-center gap-3 flex-column justify-content-center"
      style={{ height: "40vh" }}
    >
      <h4 className="fw-bold"> Tunggu Apa Lagi</h4>
      <h6>Ayo Order di Akela Printis dengan menekan tombol di bawah ini</h6>
      <button className="btn-akela">
        <a href="https://wa.me/+6286342677431">
          <p className="fw-bold">Pesan Sekarang</p>
        </a>
      </button>
    </div>
  );
};

export default AjakanComponent;
