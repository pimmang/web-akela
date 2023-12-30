import { useRef, useState } from "react";
import DesainComponent from "./layananComponent/DesainComponent";
import PercetakanComponent from "./layananComponent/PercetakanComponent";
import UiuxComponent from "./layananComponent/UiuxComponent";
import WebComponent from "./layananComponent/WebComponent";
const LayananComponent = () => {
  const item1 = useRef(null);
  const item2 = useRef(null);
  const item3 = useRef(null);
  const item4 = useRef(null);
  const tutup1 = useRef(null);
  const tutup2 = useRef(null);
  const tutup3 = useRef(null);
  const tutup4 = useRef(null);
  const deskripsi1 = useRef(null);
  const deskripsi2 = useRef(null);
  const deskripsi3 = useRef(null);
  const deskripsi4 = useRef(null);
  const deskripsi12 = useRef(null);
  const deskripsi22 = useRef(null);
  const deskripsi32 = useRef(null);
  const deskripsi42 = useRef(null);
  const isiLayanan1 = useRef(null);
  const isiLayanan2 = useRef(null);
  const isiLayanan3 = useRef(null);
  const isiLayanan4 = useRef(null);

  const [order, setOrder] = useState(-1);

  const clearOrder = () => {
    item1.current.style.order = 1;
    item2.current.style.order = 2;
    item3.current.style.order = 3;
    item4.current.style.order = 4;
  };

  const closeAll = () => {
    tutupLayanan();
    changeSizeWhenClick();
    changeWrite();
  };

  // const normal = () => {
  //   for (let i = 1; i <= 4; i++) {
  //     tutupLayanan(i);
  //   }
  // };

  const changeWrite = () => {
    deskripsi1.current.classList.remove("isi");
    deskripsi1.current.style.display = "block";
    deskripsi12.current.style.display = "none";
    deskripsi2.current.classList.remove("isi");
    deskripsi2.current.style.display = "block";
    deskripsi22.current.style.display = "none";
    deskripsi3.current.classList.remove("isi");
    deskripsi3.current.style.display = "block";
    deskripsi32.current.style.display = "none";
    deskripsi4.current.classList.remove("isi");
    deskripsi4.current.style.display = "block";
    deskripsi42.current.style.display = "none";
  };

  const changeSizeWhenClick = () => {
    item1.current.style.width = "28%";
    item2.current.style.width = "28%";
    item3.current.style.width = "28%";
    item4.current.style.width = "28%";
    item1.current.style.height = "30vw";
    item2.current.style.height = "30vw";
    item3.current.style.height = "30vw";
    item4.current.style.height = "30vw";
  };

  const tampilLayanan = (value) => {
    clearOrder();
    closeAll();
    if (value == 1) {
      deskripsi1.current.style.display = "none";
      deskripsi1.current.parentNode.classList.add('active');
      item1.current.style.width = "100%";
      item1.current.style.height = "70vh";
      item1.current.style.order = order;
      tutup1.current.style.display = "block";
      deskripsi12.current.style.display = "block";
      deskripsi12.current.classList.add("isi");
      deskripsi1.current.classList.add("isi");
      isiLayanan1.current.style.display = "flex";
    } else if (value == 2) {
      deskripsi2.current.parentNode.classList.add('active');
      item2.current.style.width = "100%";
      item2.current.style.height = "48vh";
      tutup2.current.style.display = "block";
      item2.current.style.order = order;
      deskripsi22.current.style.display = "block";
      deskripsi2.current.style.display = "none";
      deskripsi22.current.classList.add("isi");
      isiLayanan2.current.style.display = "flex";
    } else if (value == 3) {
      deskripsi3.current.parentNode.classList.add('active');
      item3.current.style.width = "100%";
      item3.current.style.height = "40vh";
      tutup3.current.style.display = "block";
      item3.current.style.order = order;
      deskripsi32.current.style.display = "block";
      deskripsi3.current.style.display = "none";
      deskripsi32.current.classList.add("isi");
      isiLayanan3.current.style.display = "flex";
    } else if (value == 4) {
      deskripsi4.current.parentNode.classList.add('active');
      item4.current.style.width = "100%";
      item4.current.style.height = "70vh";
      tutup4.current.style.display = "block";
      item4.current.style.order = order;
      deskripsi42.current.style.display = "block";
      deskripsi4.current.style.display = "none";
      deskripsi42.current.classList.add("isi");
      isiLayanan4.current.style.display = "flex";
    }
  };

  const tutupLayanan = () => {
    deskripsi1.current.parentNode.classList.remove('active');
    deskripsi2.current.parentNode.classList.remove('active');
    deskripsi3.current.parentNode.classList.remove('active');
    deskripsi4.current.parentNode.classList.remove('active');
    isiLayanan1.current.style.display = "none";
    isiLayanan2.current.style.display = "none";
    isiLayanan3.current.style.display = "none";
    isiLayanan4.current.style.display = "none";
    changeWrite();
    tutup1.current.style.display = "none";
    item1.current.style.width = "45%";
    item1.current.style.height = "50vw";
    deskripsi1.current.classList.remove("isi");
    tutup2.current.style.display = "none";
    item2.current.style.width = "45%";
    item2.current.style.height = "50vw";
    deskripsi2.current.classList.remove("isi");

    tutup3.current.style.display = "none";
    item3.current.style.width = "45%";
    item3.current.style.height = "50vw";
    deskripsi3.current.classList.remove("isi");

    tutup4.current.style.display = "none";
    item4.current.style.width = "45%";
    item4.current.style.height = "50vw";
    deskripsi4.current.classList.remove("isi");
  };
  return (
    <div className="layanan mt-4 w-100" id="layanan">
      <div className="d-flex gap-2 align-items-center">
        <div className="list"></div>
        <h1 className="fw-bold">Kategori Layanan</h1>
      </div>
      <div className="layanan-container d-flex flex-wrap justify-content-center gap-2 w-100 mt-4">
        <div className="layanan-item" ref={item1}>
          <div
            className="tutup"
            ref={tutup1}
            onClick={tutupLayanan}
            style={{ zIndex: "999" }}
          >
            <i className="ph-light ph-x fs-5"></i>
          </div>

          <img
            onClick={() => tampilLayanan(1)}
            src="https://images.unsplash.com/photo-1605978542268-b49288706bfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="img-fluid"
          />
          <div className="deskripsi d-flex align-items-center justify-content-center w-100">
            <p ref={deskripsi1}>Percetakan</p>
          </div>
          <div className="deskripsi2 d-flex justify-content-center w-100 buka">
            <p ref={deskripsi12}>Percetakan</p>
          </div>

          <div
            className="isiLayananContainer "
            style={{ zIndex: "99" }}
            ref={isiLayanan1}
          >
            <div className="isiLayanan">
              <PercetakanComponent/>
            </div>
          </div>
        </div>

        <div className="layanan-item" ref={item2}>
          <div
            className="tutup"
            ref={tutup2}
            onClick={tutupLayanan}
            style={{ zIndex: "999" }}
          >
            <i className="ph-light ph-x fs-5"></i>
          </div>

          <img
            onClick={() => tampilLayanan(2)}
            src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="img-fluid"
          />
          <div className="deskripsi d-flex align-items-center justify-content-center w-100">
            <p ref={deskripsi2}>UI/UX Design</p>
          </div>
          <div className="deskripsi2 d-flex justify-content-center w-100">
            <p ref={deskripsi22}>UI/UX Design</p>
          </div>
          <div
            className="isiLayananContainer "
            style={{ zIndex: "99" }}
            ref={isiLayanan2}
          >
            <div className="isiLayanan">
              <UiuxComponent/>
            </div>
          </div>
        </div>

        <div className="layanan-item" ref={item3}>
          <div
            className="tutup"
            ref={tutup3}
            onClick={tutupLayanan}
            style={{ zIndex: "999" }}
          >
            <i className="ph-light ph-x fs-5"></i>
          </div>

          <img
            onClick={() => tampilLayanan(3)}
            src="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="img-fluid"
          />
          <div className="deskripsi d-flex align-items-center justify-content-center w-100 ">
            <p ref={deskripsi3}>Web Programing</p>
          </div>
          <div className="deskripsi2 d-flex justify-content-center w-100 ">
            <p ref={deskripsi32}>Web Programing</p>
          </div>
          <div
            className="isiLayananContainer "
            style={{ zIndex: "99" }}
            ref={isiLayanan3}
          >
            <div className="isiLayanan">
              <WebComponent/>
            </div>
          </div>
        </div>

        <div className="layanan-item" ref={item4}>
          <div
            className="tutup"
            ref={tutup4}
            onClick={tutupLayanan}
            style={{ zIndex: "999" }}
          >
            <i className="ph-light ph-x fs-5"></i>
          </div>

          <img
            onClick={() => tampilLayanan(4)}
            src="https://images.unsplash.com/photo-1519408469771-2586093c3f14?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="img-fluid"
          />
          <div className="deskripsi d-flex align-items-center justify-content-center w-100">
            <p ref={deskripsi4}>Graphic Design</p>
          </div>
          <div className="deskripsi2 d-flex justify-content-center w-100">
            <p ref={deskripsi42}>Graphic Design</p>
          </div>
          <div
            className="isiLayananContainer "
            style={{ zIndex: "99" }}
            ref={isiLayanan4}
          >
            <div className="isiLayanan ">
              <DesainComponent/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayananComponent;
