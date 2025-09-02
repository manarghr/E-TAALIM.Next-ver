export default function Hero() {
  return (
    <section className="bg-slate-200 py-10 px-10 mt-5 mx-3 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-4xl font-sans font-bold text-slate-800">EMPOWERING EDUCATION</h1>
              <h2 className="text-4xl lg:text-4xl font-sans font-bold ">
                <span className="text-orange-400">ONE CLICK</span> <span className="text-slate-800">AT A TIME...</span>
            </h2>
            </div>

            {/* Description */}
            <p className="text-slate-700 font-sans text-lg leading-relaxed max-w-2xl">
            A DYNAMIC E-LEARNING PLATFORM FOR ALL AGES, FROM SCHOOL STUDENTS TO PROFESSIONALS. MASTER NEW SKILLS,
            EXPLORE ENDLESS KNOWLEDGE, AND SHAPE YOUR FUTURE—ANYTIME, ANYWHERE!
            </p>

            {/* the buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-slate-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-700 transition-colors">
                Explore Courses
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
)
}
