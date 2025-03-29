import DefaultLayout from "../../layouts";
import { avatar } from "../../data/avatar.json";

export default () => {
  return (
    <DefaultLayout>
      <div className="bg-[#f5f5f5] px-4 py-4">
        <ul className="flex flex-wrap justify-between rounded-md">
          {avatar.map((item, index) => (
            <li
              className="size-28 mb-1 border border-xs border-[#eee] rounded-md overflow-hidden"
              key={index}
            >
              <img src={item.url} className="h-full object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </DefaultLayout>
  );
};
