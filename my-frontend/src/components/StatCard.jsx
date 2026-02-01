export default function Statcard({ title, value , color}) {
  return (
    <div className= {`p-6 rounded-xl border flex items-center justify-between ${color}`}>
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h2 className="text-3xl font-bold">{value}</h2>
        </div>
    </div>
  );
}
