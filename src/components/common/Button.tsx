import React from "react";

interface Props {
  title: string;
  description: string;
}

const Button: React.FC<Props> = ({ title, description }) => <div />;

export default Button;
