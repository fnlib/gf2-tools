import { useLocation } from "react-router";
import { routes } from "../data/routes.json";

export default function TopBar({ onShowMenu }) {
  const location = useLocation();

  return (
    <div className="w-full h-12 bg-zinc-800 sticky top-0 z-99">
      <div
        className="h-12 flex items-center left-4 absolute cursor-pointer"
        onClick={onShowMenu}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.94971 11.9497H39.9497"
            stroke="#f3f4f6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.94971 23.9497H39.9497"
            stroke="#f3f4f6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.94971 35.9497H39.9497"
            stroke="#f3f4f6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="text-gray-100 text-xl text-center leading-12">
        {routes.find((item) => item.path == location.pathname).title}
      </p>
    </div>
  );
}
