import { useState } from "react";
import { Card, Slider, Divider } from "antd-mobile";
import DefaultLayout from "../../layouts";
import { data, splist } from "./data.json";

export default () => {
  const [level, setLevel] = useState([1, 60]);
  const [sumExp, setSumExp] = useState(575689);
  const [sumGold, setSumGold] = useState(19000);
  const [sumGunExp, setSumGunExp] = useState(667935);
  const [t1, setT1] = useState(10);
  const [t2, setT2] = useState(24);
  const [t3, setT3] = useState(20);
  const [t4, setT4] = useState(5);
  const dataList = [
    {
      title: "经验累计：",
      imgUrl:
        "https://community.cdn.sunborngame.com/prod/item/Item_Icon_Expbook_1.png",
      data: sumExp,
    },
    {
      title: "金条累计：",
      imgUrl:
        "https://community.cdn.sunborngame.com/prod/item/Item_Icon_Cash.png",
      data: sumGold,
    },
    {
      title: "T1 存量条累计：",
      imgUrl: "https://gf2wiki.com/mw/images/c/ce/Game%3AItem_Icon_Ram_2.png",
      data: t1,
    },
    {
      title: "T2 存量条累计：",
      imgUrl: "https://gf2wiki.com/mw/images/c/cd/Game%3AItem_Icon_Ram_3.png",
      data: t2,
    },
    {
      title: "T3 存量条累计：",
      imgUrl: "https://gf2wiki.com/mw/images/4/46/Game%3AItem_Icon_Ram_4.png",
      data: t3,
    },
    {
      title: "T4 存量条累计：",
      imgUrl: "https://gf2wiki.com/mw/images/4/49/Game%3AItem_Icon_Ram_5.png",
      data: t4,
    },
    {
      title: "图纸累计：",
      imgUrl:
        "https://community.cdn.sunborngame.com/prod/item/Item_Icon_WeaponBlueprint_2.png",
      data: sumGunExp,
    },
  ];
  const handleChange = (value) => {
    let exp = 0;
    let gunExp = 0;
    let goldMin = 0;
    let goldMax = 0;
    let t1Min = 0;
    let t1Max = 0;
    let t2Min = 0;
    let t2Max = 0;
    let t3Min = 0;
    let t3Max = 0;
    let t4Min = 0;
    let t4Max = 0;
    for (let i = value[0] - 1; i < value[1] - 1; i++) {
      exp += data.exp[i];
    }
    setSumExp(exp);
    for (let i = value[0] - 1; i < value[1] - 1; i++) {
      gunExp += data.gunExp[i];
    }
    setSumGunExp(gunExp);

    let tMin = parseInt((value[0] - 10) / 10);
    let tMax = parseInt((value[1] - 10) / 10);

    // Min
    for (let i = 0; i < tMin; i++) {
      goldMin = goldMin + data.tp[i][0];
      t1Min = t1Min + data.tp[i][1];
      t2Min = t2Min + data.tp[i][2];
      t3Min = t3Min + data.tp[i][3];
      t4Min = t4Min + data.tp[i][4];
    }
    // Max
    for (let i = 0; i < tMax; i++) {
      goldMax = goldMax + data.tp[i][0];
      t1Max = t1Max + data.tp[i][1];
      t2Max = t2Max + data.tp[i][2];
      t3Max = t3Max + data.tp[i][3];
      t4Max = t4Max + data.tp[i][4];
    }
    setSumGold(goldMax - goldMin);
    setT1(t1Max - t1Min);
    setT2(t2Max - t2Min);
    setT3(t3Max - t3Min);
    setT4(t4Max - t4Min);
  };

  return (
    <DefaultLayout>
      <Card title="升级素材计算器" className="mx-6 my-8 text-base">
        <p className="mx-2 my-4">
          <span className="mr-2">当前等级: {level[0]}</span>
          <span className="mx-2">目标等级: {level[1]}</span>
        </p>
        <Slider
          range
          min={1}
          max={60}
          defaultValue={[1, 60]}
          onChange={(value) => setLevel(value)}
          onAfterChange={handleChange}
          className="my-5"
        ></Slider>
        <ul>
          {dataList.map((item, index) => (
            <li className="flex items-center my-4" key={index}>
              <img src={item.imgUrl} className="size-8 mr-2"></img>
              <p>{item.title + item.data}</p>
            </li>
          ))}
        </ul>
        <Divider />
        <p className="ml-2 my-2">心智螺旋</p>
        <ul className="flex flex-wrap">
          {splist.map((item, index) => (
            <li className="m-2 flex items-center" key={index}>
              <img src={item.imgUrl} className="size-8 mr-2" />
              <span>{"x " + item.num}</span>
            </li>
          ))}
        </ul>
        <Divider />
        <p className="ml-2 my-2">固键</p>
        <ul>
          <li className="mx-2 my-4 flex items-center">
            <img
              src="https://community.cdn.sunborngame.com/prod/item/Item_Icon_TalentNucleus_3.png"
              className="size-8 mr-2"
            ></img>
            <span>x 8(标准人形) / 18(精英人形)</span>
          </li>
          <li className="mx-2 my-4 flex items-center">
            <img
              src="https://community.cdn.sunborngame.com/prod/item/Item_Icon_Cash.png"
              className="size-8 mr-2"
            ></img>
            <span>x 46000</span>
          </li>
        </ul>
      </Card>
    </DefaultLayout>
  );
};
