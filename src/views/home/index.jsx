import { useState } from "react";
import { Popup } from "antd-mobile";
import TopBar from "../../layouts/topbar";
import Menu from "../../layouts/menu";

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full h-full overflow-hidden">
      <TopBar onShowMenu={() => setVisible(true)}></TopBar>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        position="left"
        bodyStyle={{ width: "60vw", backgroundColor: "#f4f5f4" }}
      >
        <Menu></Menu>
      </Popup>

      <div className="h-full bg-[url(https://gf2-cn.cdn.sunborngame.com/website/official_zf/mobile/image/home-m_b64cacdf74.jpg)] bg-cover bg-bg-center">
        <img
          src="https://gf2-cn.cdn.sunborngame.com/website/official_zf/mobile/image/home_index_bg.png"
          className="size-full"
        />
      </div>
    </div>
  );
};
