import { BellOutlined, SearchOutlined } from "@ant-design/icons";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center bg-[#1A1A22] px-4 py-2 rounded-xl w-80">
        <SearchOutlined className="text-gray-400" />
        <input
          type="text"
          placeholder="Search your needs"
          className="bg-transparent outline-none ml-2 w-full text-sm"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="text-sm text-gray-400 hover:text-white">
          Export report
        </button>

        <BellOutlined className="text-gray-400 text-lg cursor-pointer" />

        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="rounded-full w-8 h-8"
          />
          <div>
            <p className="text-sm font-medium">Omar Bergson</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
