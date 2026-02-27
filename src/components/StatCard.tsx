interface StatCardProps {
  title: string;
  value: string;
  growth: string;
}

const StatCard = ({ title, value, growth }: StatCardProps) => {
  return (
    <div className="bg-[#1A1A22] p-6 rounded-2xl hover:scale-[1.02] transition-all">
      <h3 className="text-gray-400 text-sm">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
      <p className="text-green-400 text-sm mt-2">{growth}</p>
    </div>
  );
};

export default StatCard;
