import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        backgroundColor: "white",
      }}
    >
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
