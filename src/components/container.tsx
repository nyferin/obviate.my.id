import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <main className="w-full max-w-3xl mx-auto p-5 flex flex-col gap-5">
      {React.Children.map(children, (child, index) => (
        <div className="rounded-sm border px-5 py-3 text-justify" key={index}>
          {child}
        </div>
      ))}
    </main>
  );
}
