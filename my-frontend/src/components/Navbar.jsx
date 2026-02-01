import { Home, FileText, PlusCircle, Settings, Info } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      <div className="flex items-center gap-2 font-bold text-lg">
        <div className="bg-emerald-500 text-white p-2 rounded-lg">NoteX</div>
        NotesApp
      </div>

      <ul className="flex gap-6 text-gray-600">
        <li className="flex items-center gap-1 text-emerald-600 font-medium">
          <Home size={16}/> Home
        </li>
        <li className="flex items-center gap-1"><FileText size={16}/> Notes</li>
        <li className="flex items-center gap-1"><PlusCircle size={16}/> Create</li>
        <li className="flex items-center gap-1"><Settings size={16}/> Settings</li>
        <li className="flex items-center gap-1"><Info size={16}/> About</li>
      </ul>
    </nav>
  );
}
