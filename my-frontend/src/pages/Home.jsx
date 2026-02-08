import Statcard from '../components/Statcard'
import FeatureCard from '../components/FeatureCard'
import { Edit, Folder, Search, Save} from "lucide-react";

export default function Home({notes}) {
  return (
    <div className='px-8 py-10 space-y-10'>

        {/* welcome */}
        <div className='text-center'>
            <h1 className='text-4xl font-bold'>Welcome to NoteX App</h1>
            <p className='text-gray-500 mt-2'>Your personal space for capturing ideas, thoughts, and reminders</p>

            <button className='mt-4 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition'>+ Create New Note</button>
        </div>
        {/* stats */}
        <div className='grid grid-cols-3 gap-6'>
            <Statcard title="Total Notes" value={notes.length}/>
            <Statcard title="Created Today" value={0}/>
            <Statcard title="This Week" value={0}/>
        </div>

        {/* features */}
        <div className='grid grid-cols-4 gap-6'>
            <FeatureCard icon={<Edit/>} title="Create Notes" description="Quickly capture your thoughts and ideas"/>
            <FeatureCard icon={<Folder/>} title="Organize" description="Categorize and manage your notes efficiently"/>
            <FeatureCard icon={<Search/>} title="Search" description="Find any note instantly with powerful search"/>
            <FeatureCard icon={<Save/>} title="Auto Save" description="Your notes are automatically saved locally"/>
        </div>

        {/* CTA */}
        <div className='bg-emerald-500 text-white p-10 rounded-xl text-center'>
            <h2 className='text-2xl font-bold'>Ready to get started?</h2>
            <p className='mt-2'>Create your first note today and start organizing your thoughts today</p>
            <div className='mt-6 flex justify-center gap-4'>
                <button className='bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-100 transition'>Create Note</button>
                <button className='bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition'>View all Notes</button>
            </div>
        </div>

      <div className='bg-emerald-500 text-white p-10 rounded-xl text-center'>
            <div className='mt-6 flex justify-center gap-4'>
                <button className='bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-100 transition'>Create Note</button>
                <button className='bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition'>View all Notes</button>
            </div>
        </div>
    </div>
  );
}
