import { useRef } from "react";
const KeunggulanComponent = () => {
  const desk1 = useRef(null);
  const desk2 = useRef(null);
  const desk3 = useRef(null);
  const desk4 = useRef(null);

  const handleClick = (value)=>{
    if(value == 1){
      desk1.current.classList.toggle('desk');
    }
    if(value == 2){
      desk2.current.classList.toggle('desk');
    }
    if(value == 3){
      desk3.current.classList.toggle('desk');
    }
    if(value == 4){
      desk4.current.classList.toggle('desk');
    }
  }
  return (
    <div className="keunggulan w-100 d-flex flex-column gap-2">
      <div className="d-flex gap-2 align-items-center mb-3">
        <div className="list"></div>
        <h1 className="fw-bold">Kenapa memilih Akela</h1>
      </div>
      <div className="p-3 keunggulan-item d-flex flex-column justify-content-between">
        <h6>Banyak Promo Menarik</h6>
        <div className="deskripsi d-flex gap-1">
        <i class="ph-fill ph-quotes"></i><p className="desk" ref={desk1} onClick={()=>{handleClick(1)}}>Akela memberikan banyak promo menarik untuk membantu para customer khususnya mahasiswa  dalam menyelesaikan tugas - tugas yang membutuhkan jasa percetakan. Kami yakin bahwa masa perkuliahan membutuhkan biaya yang sangat banyak. Oleh karena itu, Akela berusaha membantu dengan memberikan promo - promo menarik agar Akela’s bisa tetap mendapatkan jasa percetakan tanpa merogoh kocek yang terlalu dalam</p>
        </div>
      </div>

      <div className="p-3 keunggulan-item d-flex flex-column justify-content-between">
        <h6>Gratis Ongkir</h6>
        <div className="deskripsi d-flex gap-1">
        <i class="ph-fill ph-quotes"></i><p className="desk" ref={desk2} onClick={()=>{handleClick(2)}}>Saat ini Akela masih beroperasi secara online serta belum memiliki toko fisik. Oleh karena itu, untuk menjangkau pelanggan, Akela dengan senang hati melakukan pengambilan dan pengiriman ke tempat yang Akela’s minta secara cuma - cuma.</p>
        </div>
      </div>
      <div className="p-3 keunggulan-item d-flex flex-column justify-content-between">
        <h6>Hemat</h6>
        <div className="deskripsi d-flex gap-1">
        <i class="ph-fill ph-quotes"></i><p className="desk" ref={desk3} onClick={()=>{handleClick(3)}}>Karena tujuan utama kami saat ini adalah membantu mahasiswa, kami berusaha mematok harga yang menguntungkan kedua belah pihak, baik kami dan juga para pelanggan Akela Printis. Selain itu, kami juga menghadirkan berbagai promo dan layanan yang dapat membantu mahasiswa untuk semakin hemat.</p>
        </div>
      </div>
      <div className="p-3 keunggulan-item d-flex flex-column justify-content-between">
        <h6>Berkualitas</h6>
        <div className="deskripsi d-flex gap-1">
        <i class="ph-fill ph-quotes"></i><p className="desk" ref={desk4} onClick={()=>{handleClick(4)}}>Meskipun harga yang kami berikan lumayan murah, kualitas yang kami suguhkan berbanding terbalik dengan itu. Kami berusaha memberikan kualitas yang tinggi dalam setiap proyek yang kami kerjakan, karena kami yakin bahwa apa yang Akelas berikan kepada kami adalah proyek penting yang tentunya harus kami kerjakan semaksimal mungkin.</p>
        </div>
      </div>
    </div>
  );
};

export default KeunggulanComponent;
