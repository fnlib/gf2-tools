import DefaultLayout from "../../layouts";

export default () => {
  return (
    <DefaultLayout>
      <div className="w-full h-screen bg-[#28282f] flex items-center justify-center">
        <div className="w-380 h-full 2xl:h-180 bg-[url('/images/GF.jpg')] bg-cover">
          <div className="w-full h-full px-8 pt-13 pb-30 bg-black opacity-50 text-white sm:flex flex-col justify-around text-xl sm:text-2xl">
            <h1 className="text-3xl sm:text-5xl text-center hidden sm:block">
              班组招募
            </h1>
            <p className="my-8 2xl:my-0">班组名称：北兰岛（ID 100155）</p>
            <p className="my-8 2xl:my-0">
              公会愿景：不争排名反内卷，主打在休闲的同时摸完所有基础奖励
            </p>
            <p className="my-8 2xl:my-0">
              招募要求：公会战期间全勤出两刀（每刀均3500分以上）
            </p>
            <p className="my-8 2xl:my-0">
              公会优势：会内提供各属性6椎主c和公会等级增伤BUFF
            </p>
            <p className="my-8 2xl:my-0">
              关于我们：我们是由史实向军武端游爱好者组成，如果您刚好也是战地系列、使命召唤、战争雷霆、WOT、WOWS、KARDS、战争号令等玩家，我们非常期待您的加入！
            </p>
            <p className="my-8 2xl:my-0">
              班组交流群：996363408 申请时附上游戏ID
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
