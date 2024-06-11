import { User } from "firebase/auth";
import React, { lazy, ReactNode } from "react";
import { Route } from "react-router-dom";

const AuthGuards = lazy(() => import("./../guard/AuthGuard"));
const DashBoard = lazy(() => import("./../pages/DashBoard"));
const Groups = lazy(() => import("../pages/groupPages"));
const Profile = lazy(() => import("./../pages/Profile"));
const GroupDetails = lazy(() => import("../pages/groupPages/GroupDetails"));
const ExpenseList = lazy(() => import("../pages/expensePages"));
const IncomeList = lazy(() => import("../pages/incomePages"));
const ProfileUpdateForm = lazy(() => import("../components/profile/ProfileUpdateForm"));

const InvestmentList = lazy(() => import("../pages/investmentPages"));


const AuthRoutes: ReactNode[] = [
  <Route
    key='Dashboard'
    path='/dashboard'
    element={<AuthGuards component={DashBoard} />}
  />,
  <Route
    key='IncomeList'
    path='/IncomeList'
    element={<AuthGuards component={IncomeList} />}
  />,
  <Route
    key='InvestmentList'
    path='/InvestmentList'
    element={<AuthGuards component={InvestmentList} />}
  />,
  
  <Route
    key='Dashboard'
    path='/profile'
    element={<AuthGuards component={Profile} />}
  />,
  <Route
    key='Group'
    path='/group'
    element={<AuthGuards component={Groups} />}
  />,
  <Route
    key='Group'
    path='/group/:id'
    element={<AuthGuards component={GroupDetails} />}
  />,
  <Route
    key='Expense'
    path='/expense'
    element={<AuthGuards component={ExpenseList} />}
  />,
  <Route
    key='Profile Update'
    path='/profile/update'
    element={<AuthGuards component={ProfileUpdateForm} />}
  />,
];
export default AuthRoutes;
