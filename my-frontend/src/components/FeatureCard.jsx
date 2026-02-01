export default function FeatureCard({ title, description, icon }) {
  return (
    <div className=" p-6 rounded-xl border hover:shadow-md transition">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}