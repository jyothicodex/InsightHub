import { FaBrain, FaShieldAlt, FaServer } from "react-icons/fa";

function Hero() {
  return (
    <section className="w-full glass-panel bg-gradient-to-br from-indigo-50/80 via-white/60 to-purple-50/80 rounded-3xl p-10 text-slate-800 shadow-xl shadow-indigo-500/5 relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>

      <div className="max-w-5xl relative z-10">

        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600">
          InsightHub Workspace
        </h1>
        
        <h2 className="text-xl font-semibold mb-6 text-slate-600">
          Overview of your document Intelligence workspace
        </h2>

        {/* Description */}
        <p className="text-md text-slate-500 leading-relaxed max-w-2xl">
          A centralized platform for managing industrial documents,
          monitoring assets, and leveraging AI-powered insights to
          improve operational efficiency and decision-making.
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap gap-4 mt-8">

          <div className="flex items-center gap-2 bg-indigo-50/80 backdrop-blur-md px-4 py-2 rounded-xl border border-indigo-100/50 text-indigo-700 shadow-sm">
            <FaBrain className="text-indigo-500" />
            <span className="font-medium text-sm">AI Powered</span>
          </div>

          <div className="flex items-center gap-2 bg-purple-50/80 backdrop-blur-md px-4 py-2 rounded-xl border border-purple-100/50 text-purple-700 shadow-sm">
            <FaShieldAlt className="text-purple-500" />
            <span className="font-medium text-sm">Secure Platform</span>
          </div>

          <div className="flex items-center gap-2 bg-blue-50/80 backdrop-blur-md px-4 py-2 rounded-xl border border-blue-100/50 text-blue-700 shadow-sm">
            <FaServer className="text-blue-500" />
            <span className="font-medium text-sm">System Online</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;