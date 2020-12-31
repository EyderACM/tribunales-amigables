import { FC } from "react";
import { MenuCardProps } from "./MenuCardProps";

export const MenuCard: FC<MenuCardProps> = ({ label }) => {
  return <p>{label}</p>;
};
