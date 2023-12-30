import { Percetakan } from "../../data/data";

const PercetakanComponent = () => {
  return (
    <div className="w-100 h-100 text-white d-flex flex-column align-items-center percetakan p-2 gap-2">
      {Percetakan.map((data) => {
        return (
          <div
            key={data.id}
            className="item-layanan d-flex flex-column align-items-start w-100 p-3  gap-3"
          >
            <h2>Rp{" " + data.harga + ",-"}</h2>
            <div>
              <div className="d-flex gap-2 align-items-center">
                <h1>{data.nama}</h1>
                <a href="https://wa.me/+6285342677431">
                  <i className="ph-fill ph-whatsapp-logo"></i>
                </a>
              </div>
              <p>{data.deskripsi}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PercetakanComponent;
