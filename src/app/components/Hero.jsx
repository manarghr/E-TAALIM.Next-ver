import { FaUser, FaChalkboardTeacher, FaCalendarAlt } from 'react-icons/fa';

export default function Hero() {
return (
    <>
    <section className="bg-slate-200 py-10 px-10 mt-5 mx-3 rounded-2xl">
    <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
        <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-2">
            <h1 className="text-4xl lg:text-4xl font-sans font-bold text-slate-800">Empowering education</h1>
            <h2 className="text-4xl lg:text-4xl font-sans font-bold ">
                <span className="text-orange-400">ONE CLICK</span> <span className="text-slate-800">at a time...</span>
            </h2>
            </div>

            {/* Description */}
            <p className="text-slate-700 font-sans text-lg leading-relaxed max-w-2xl">
            A dynamic e-learning platform for all ages, from school students to professionals. Master new skills, 
            explore endless knowledge, and shape your future anytime, anywhere !
            </p>

            {/* the buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-slate-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-700 transition-colors">
                Join as Student 
            </button>
            <button className="bg-orange-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-500 transition-colors">
                Join as Mentor
            </button>
            </div>
        </div>

          {/* image on the right */}
        <div className="relative flex justify-center lg:justify-end">
            <img
            src="classroom.png"
            className="w-full max-w-md h-full rounded-3xl"
            />
        </div>
        </div>
    </div>
    </section>

    {/* Features Section */}
<div className="py-16 px-4">
<div className="max-w-6xl mx-auto">
    <h2 className="text-5xl font-sans font-bold text-slate-800 text-center mb-12">
    Why E-Taalim ?
    </h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      {/* Multiple Levels */}
    <div className="relative bg-white rounded-3xl p-8 overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-slate-800">
        {/* Light swipe animation */}
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        
        <div className="relative z-10">
        <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mb-6">
            <FaUser className="text-white text-xl" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Multiple levels</h3>
        <p className="text-slate-700 font-mono">From beginner-friendly courses to advanced learning paths, E-Taalim is designed for learners at every stage. Progress step by step and gain the confidence to master new skills.
</p>
        </div>
    </div>

      {/*Professional Mentors */}
    <div className="relative bg-white rounded-3xl p-8 overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-slate-800">
        {/* Light swipe animation */}
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        
        <div className="relative z-10">
        <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mb-6">
            <FaChalkboardTeacher className="text-white text-xl" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Professional Mentors</h3>
        <p className="text-slate-700 font-mono">Learn directly from industry experts who bring real-world experience into the classroom. Our mentors provide practical insights, career advice, and continuous support to help you achieve your goals
.</p>
        </div>
    </div>

      {/* Flexible Learning */}
<div className="relative bg-white rounded-3xl p-8 overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-slate-800">
  {/* Light swipe animation */}
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

<div className="relative z-10">
    <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mb-6">
    <FaCalendarAlt className="text-white text-xl" />
    </div>
    <h3 className="text-2xl font-bold text-slate-700 mb-4">Flexible Learning</h3>
    <p className="text-slate-700 font-mono">
    Your education, your schedule. With E-Taalim, you can study anytime and anywhere—
    no rigid timetables, just the freedom to learn in a way that fits your lifestyle.
    </p>
</div>
</div>

    </div>
    </div>
</div>
</>
);
}
