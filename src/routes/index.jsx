import { createBrowserRouter } from "react-router";
import Home from "../views/home";
import Level from "../views/level";
import Skill from "../views/skill";
import Avatar from "../views/avatar";
import Clan from "../views/clan";

const router = createBrowserRouter([
  {
    path: "/gf2-tools/",
    element: <Home />,
  },
  {
    path: "/gf2-tools/level",
    element: <Level />,
  },
  {
    path: "/gf2-tools/skill",
    element: <Skill />,
  },
  {
    path: "/gf2-tools/avatar",
    element: <Avatar />,
  },
  {
    path: "/gf2-tools/clan",
    element: <Clan />,
  },
]);

export default router;
