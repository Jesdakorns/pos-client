import { Button, ButtonProps } from "@mui/material";
import React from "react";

type Props = ButtonProps;

const ButtonCT = ({ children, ...props }: Props) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonCT;
