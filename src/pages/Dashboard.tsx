import StatCard from "../components/StatCard";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        <StatCard title="Total Sales" value="$15,612,545" growth="+12.08%" />
        <StatCard title="Total Orders" value="28,265" growth="+90.08%" />
        <StatCard title="Top Countries" value="Switzerland" growth="Germany" />
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="col-span-2 bg-[#1A1A22] rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4">Statistics</h2>
          <div className="h-64 bg-[#111118] rounded-xl flex items-center justify-center text-gray-500">
            Chart Area
          </div>
        </div>

        <div className="bg-[#1A1A22] rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4">Billing</h2>
          <div className="h-64 bg-[#111118] rounded-xl flex items-center justify-center text-gray-500">
            Donut Chart
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
