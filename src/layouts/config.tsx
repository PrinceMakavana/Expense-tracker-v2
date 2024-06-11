import { SvgIcon } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { ReactNode } from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Group } from "@mui/icons-material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCardIcon from '@mui/icons-material/AddCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
export interface itemsType {
  title: string;
  path: string;
  icon: JSX.Element;
}
export const items: itemsType[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "income",
    path: "/IncomeList",
    icon: <AddCardIcon />,
  },
  {
    title: "Expense",
    path: "/expense",
    icon: <ShoppingCartCheckoutIcon />,
  },
  {
    title: "Investment",
    path: "/InvestmentList",
    icon: <TrendingUpIcon />,
  },
  
  {
    title: "Group",
    path: "/group",
    icon: <Group />,
  },

  {
    title: "Profile",
    path: "/profile",
    icon: <AccountCircleIcon />,
  },
  
  

];
