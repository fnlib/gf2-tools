import DefaultLayout from "../../layouts";
import { avatar } from "./avatar.json";

export default () => {
  return (
    <DefaultLayout>
      <div className="px-4 py-8">
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
