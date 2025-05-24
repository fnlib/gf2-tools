import { Link } from "react-router";
import { routes } from "../data/routes.json";

export default function Menu() {
  const menuList = routes;
  return (
    <ul className="w-full h-full mt-4">
      {menuList.map((item) => (
        <li className="w-full h-12 px-4" key={item.title}>
          <Link to={item.path}>
            <p className="text-lg text-gray-950 leading-12">{item.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
