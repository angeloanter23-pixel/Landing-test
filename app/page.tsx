import { ArrowRight, Zap, Shield, Smartphone, Layers, CheckCircle2 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Layers className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-slate-900">SaaSify</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Testimonials</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Pricing</a>
          </div>
          <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition shadow-sm hover:shadow-md">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
            v2.0 is now live
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Build faster with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              supercharged tools
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            The ultimate platform to launch, scale, and manage your products. Stop reinventing the wheel and focus on what matters most—your customers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-700 transition shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2">
              Start building for free <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 transition">
              View documentation
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to succeed</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Our platform provides a comprehensive suite of tools designed to help you build and scale your application effortlessly.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-amber-500" />} 
              title="Lightning Fast" 
              description="Optimized for speed and performance. Deliver the best experience to your users with edge computing."
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6 text-emerald-500" />} 
              title="Secure by Default" 
              description="Enterprise-grade security built-in. Rest easy knowing your data and customers are protected."
            />
            <FeatureCard 
              icon={<Smartphone className="w-6 h-6 text-indigo-500" />} 
              title="Mobile Responsive" 
              description="Looks perfect on any screen size. Reach your customers wherever they are, on any device."
            />
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-20 border-y border-slate-200 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatBox number="99.9%" label="Uptime SLA" />
            <StatBox number="10M+" label="API Requests" />
            <StatBox number="5,000+" label="Happy Developers" />
            <StatBox number="24/7" label="Expert Support" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-indigo-900 text-white overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-indigo-500/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-indigo-400/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-indigo-300/20 rounded-full"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to transform your workflow?
          </h2>
          <p className="text-indigo-200 mb-10 max-w-2xl mx-auto text-lg md:text-xl">
            Join thousands of developers who are already using our platform to build amazing products faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-white text-indigo-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition shadow-xl hover:shadow-2xl">
              Create your free account
            </button>
            <span className="text-indigo-300 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> No credit card required
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="text-indigo-500 w-6 h-6" />
                <span className="text-xl font-bold text-white">SaaSify</span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed">
                Empowering developers and businesses to build better software, faster. Making the complex simple.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} SaaSify Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Components

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
      <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function StatBox({ number, label }: { number: string, label: string }) {
  return (
    <div>
      <div className="text-4xl font-extrabold text-slate-900 mb-2">{number}</div>
      <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{label}</div>
    </div>
  );
}
