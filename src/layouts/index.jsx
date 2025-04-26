import { useState } from "react";
import { Popup } from "antd-mobile";
import TopBar from "./topbar";
import Menu from "./menu";

export default function DefaultLayout({ children }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full min-h-full bg-[#f5f5f5]">
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
      <main>{children}</main>
    </div>
  );
}
