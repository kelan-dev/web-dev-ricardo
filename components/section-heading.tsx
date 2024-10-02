import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SectionHeading = ({ children }: Props) => {
  return (
    <h2 className="mb-8 text-center text-3xl font-medium capitalize">
      {children}
    </h2>
  );
};

export default SectionHeading;
