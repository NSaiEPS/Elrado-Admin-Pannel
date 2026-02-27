import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0F0F14]">
      <div className="flex space-x-3">
        <span className="w-4 h-4 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
        <span className="w-4 h-4 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
        <span className="w-4 h-4 bg-purple-500 rounded-full animate-bounce" />
      </div>
    </div>
  );
};

export default Loader;