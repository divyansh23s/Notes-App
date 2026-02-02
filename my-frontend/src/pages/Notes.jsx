import { Link } from "react-router-dom";
import { Search,PlusCircle } from "lucide-react";

export default function Notes() {
    return (
        <div className="px-10 py-8">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold">My Notes</h1>
                    <p className="text-text-muted text-sm">1 note found</p>
                </div>
            
                <Link 
                    to='/create'
                    className='inline-flex items-center gap-2 mt-6 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-dark transition'
                >
                    <PlusCircle size={16}/>New Note
                </Link>
            </div>

            <div className="flex gap-4 border rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 border px-3 py-2 rounded-lg w-1/3">
                    <Search size={16} className="text-text-muted" />
                    <input
                        className="outline-none text-sm w-full"
                        placeholder="Search notes..."
                    />
                </div>

                <select className="border px-3 py-2 rounded-lg text-sm w-1/4">
                    <option>All Categories</option>
                </select>

                <select className="border px-3 py-2 rounded-lg text-sm w-1/4">
                    <option>Last Updated</option>
                </select>

            </div>

            <div className="w-[280px] border-2 border-purple-500 rounded-xl p-4">
                <h3 className="font-semibold">abc</h3>

                <span className="inline-block bg-gray-100 text-xs px-2 py-1 rounded mt-2">
                    dd
                </span>

                <p className="text-sm mt-3 text-gray-700">evfbf</p>

                <div className="flex justify-between text-xs text-text-muted mt-4">
                    <span>Updated Feb 1, 2026</span>
                    <span>Feb 1, 2026</span>
                </div>
            </div>
        </div>
    );

}
