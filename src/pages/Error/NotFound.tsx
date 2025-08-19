import type { FC } from "react";

export const NotFound: FC = () => {
  return (
    <div className="flex justify-center flex-col items-center w-full h-[80vh] gap-4">
      <h3 className="font-bold text-4xl">404</h3>
      <p>The page you are looking for is not available</p>
    </div>
  );
};
