import NavbarComponent from "./component/NavbarComponent";
import HeaderComponent from "./component/HeaderComponent";
import SapaComponent from "./component/SapaComponent";
import MenuComponent from "./component/MenuComponent";
import LayananComponent from "./component/LayananComponent";
import SosmedComponent from "./component/SosmedComponent";
import TestiComponent from "./component/TestiComponent";
import KeunggulanComponent from "./component/KeunggulanComponent";
import TentangAkelaComponent from "./component/TentangAkelaComponent";
import AjakanComponent from "./component/AjakanComponent";
import FooterComponent from "./component/FooterComponent";
import FloatingActionButtons from "./component/FloatingActionButtons";
function App() {
  return (
    <>
      <div className="home">
        <NavbarComponent />
        <SapaComponent />
        <HeaderComponent />
        <MenuComponent />
        <LayananComponent />
        <SosmedComponent />
        <TestiComponent />
        <KeunggulanComponent />
        <TentangAkelaComponent />
        <AjakanComponent />
      </div>
      <FooterComponent />
      <FloatingActionButtons />
      <div className="eror-container">
        <div className="desktop-eror text-center w-100 vh-100 d-flex flex-column align-items-center justify-content-center">
          <div className="hm d-flex flex-column gap-3">
            <h1>Mohon Maaf !!</h1>
            <p>
              Web ini hanya tersedia dalam versi mobile <br />
              Silahkan buka di perangkat mobile Anda
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
