import { useEffect, useState } from "react";
import { Selector } from "antd-mobile";
import DefaultLayout from "../../layouts";
import { type, effect, skill } from "./skill.json";
import { dolls } from "../../data/dolls.json";

export default function Skill() {
  const [selectType, setSelectType] = useState(["0", "1", "2"]);
  const [selectEffect, setSelectEffect] = useState([]);
  const [skillList, setSkillList] = useState([]);
  useEffect(() => {
    const skillArr = skill.filter((item) => {
      return (
        selectType.includes(item.type) && selectEffect.includes(item.effect)
      );
    });
    setSkillList(skillArr);
  }, [selectType, selectEffect]);

  return (
    <DefaultLayout>
      <div className="min-h-full m-6">
        <div className="my-4">
          <p className="text-base font-bold my-3">类型</p>
          <Selector
            options={type}
            multiple
            defaultValue={selectType}
            showCheckMark={false}
            onChange={(arr) => {
              setSelectType(arr);
            }}
            style={{
              "--color": "#313131",
              "--text-color": "#ffffff",
              "--checked-color": "#f26c1c",
              "--checked-text-color": "#eeeeee",
              "--padding": "4px 20px",
            }}
          ></Selector>
        </div>

        <div>
          <p className="text-base font-bold my-3">效果</p>
          <Selector
            options={effect}
            showCheckMark={false}
            onChange={(arr) => {
              setSelectEffect(arr);
            }}
            style={{
              "--color": "#313131",
              "--text-color": "#ffffff",
              "--checked-color": "#f26c1c",
              "--checked-text-color": "#ffffff",
              "--padding": "4px 20px",
            }}
          ></Selector>
        </div>
      </div>
      <div className="mx-6 mt-10">
        {skillList.length === 0 && (
          <div className="leading-6">
            <p className="text-base font-bold my-2">使用说明：</p>
            <p className="text-[#f26c1c]">■ 选中状态</p>
            <p className="text-[#313131]">■ 未选中状态</p>
            <p className="my-2">
              如需查看技能描述，点击所需查看的技能即可触发弹窗
            </p>
            <p className="my-2">
              技能描述非完整描述，仅概括所选类型相关效果，如需查看完整描述，请进入游戏客户端或相关
              WIKI 查看具体描述
            </p>
            <p>
              技能描述中如有技能效果需要相应条件触发的，其条件会用[#条件#]标识，例如：[主动治疗]友方目标时，为其驱散1个减益效果，对拥有[热态回复]的目标，额外驱散1个减益效果
            </p>
          </div>
        )}
        <ul className="flex flex-wrap">
          {skillList.map((item, index) => (
            <li
              key={index}
              className="w-36 h-10 my-1 mr-4 flex items-center"
              onClick={() => {
                alert(item.describe);
              }}
            >
              <img
                src={dolls[item.user_id].avatar_url}
                className="w-8 h-8 mr-2 rounded-2xl"
              ></img>
              <p className="font-medium">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </DefaultLayout>
  );
}
