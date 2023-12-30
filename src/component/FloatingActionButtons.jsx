import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import { useEffect, useState } from "react";
import SegmentIcon from "@mui/icons-material/Segment";
import InstagramIcon from "@mui/icons-material/Instagram";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useRef } from "react";
const FloatingActionButtons = () => {
  const box = useRef(null);
  const menu = useRef(null);
  const [active, setActive] = useState(false);
  const tampilFab = () => {
    window.scrollY > 370 ? setActive(true) : setActive(false);
    if (window.scrollY > 370) {
      menu.current.style.transform = "translateY(0)";
    } else {
      menu.current.style.transform = "translateY(100vh)";
    }
  };
  useEffect(() => {
    tampilFab();
    window.addEventListener("scroll", tampilFab);
  });

  const handleClick = () => {
    menu.current.classList.toggle("ada");
    box.current.classList.toggle("ada");
    box.current.classList.toggle("ya");
    menu.current.classList.toggle("px-2");
    menu.current.classList.toggle("py-2");
  };
  return (
    <div className="fab">
      <Box sx={{ "& > :not(style)": { m: 1 } }} ref={box} className="ada">
        <div
          className="d-flex flex-column gap-3 menu-fab-container align-items-center ada"
          ref={menu}
        >
          <a href="#tentang">
            <Fab size="medium" aria-label="like" className="menu">
              <i class="ph-fill ph-question fs-1 text-black"></i>
            </Fab>
          </a>
          <a href="#testi">
            <Fab size="medium" aria-label="like" className="menu">
              <i className="ph-fill ph-chat-circle-dots fs-1 text-black"></i>
            </Fab>
          </a>
          <a href="#sosmed">
            <Fab size="medium" aria-label="like" className="menu">
              <i className="ph-fill ph-instagram-logo fs-1 text-black"></i>
            </Fab>
          </a>
          <a href="#layanan">
            <Fab size="medium" aria-label="like" className="menu">
              <i className="ph-fill ph-package fs-1 text-black"></i>
            </Fab>
          </a>
        </div>
        <Fab
          size="medium"
          aria-label="like"
          className={active ? "btn-fab utama" : "active btn-fab utama"}
          onClick={handleClick}
        >
          <SegmentIcon className="fs-1" />
        </Fab>
      </Box>
    </div>
  );
};

export default FloatingActionButtons;
