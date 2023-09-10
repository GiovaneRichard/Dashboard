import { nanoid } from "nanoid";
import { IRoutGroup } from "./types";
import { Routes } from "@/routes";

import { MdDashboard, MdSettings, MdDvr } from "react-icons/md";

export const routes: IRoutGroup[] = [
  {
    id: nanoid(),
    items: [
      {
        name: "Dashboard",
        path: Routes.DASHBOARD,
        icon: MdDashboard,
      },
    ],
  },
];
