import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PromptInput from "@/components/PromptInput";
import TemplateGrid from "@/components/TemplateGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <Hero />
        
        {/* Prompt Input Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              What do you want to build?
            </h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
              Describe your app idea and we'll build it for you in seconds.
            </p>
          </div>
          <PromptInput />
        </section>
        
        {/* Templates Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Or start with a template
            </h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
              Choose from our pre-built templates to get started quickly.
            </p>
          </div>
          <TemplateGrid />
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Build high quality software without writing code
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Creating software has never been more accessible. With AppCraft, simply describe your idea in your own words, and watch it transform into a fully functional application.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">20x faster than coding</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Use your native language to describe your idea, then watch AppCraft do the rest. Creating for the web is faster and easier than ever before.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Prompt to edit</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Forget about the overhead of frontend engineers or freelancers to maintain your website. Ask in text to change anything.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">You own the code</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Everything that AppCraft builds is yours. Sync your codebase to Github and edit in any code editor, export or publish your app instantly with one click.
              </p>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Loved by thousands of product creators
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "AppCraft is hands down the best tool I've ever used. It's like a super senior dev who shares his tricks with you. For the first time, I can build apps without the headache."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">Sarah K.</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Founder, TechStart</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "I can make a startup in a week with AppCraft. It's revolutionized how I approach new projects and ideas."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">Michael T.</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Serial Entrepreneur</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "I'm always amazed at how fast we can whip up a UI with AppCraft. It gives me a solid base that I can easily tweak and build on."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">Lisa R.</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Product Designer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-white dark:bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Product</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Features</a></li>
                <li><a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Templates</a></li>
                <li><a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Guides</a></li>
                <li><a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">API Reference</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About</a></li>
                <li><a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Blog</a></li>
                <li><a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AppCraft
              </span>
            </div>
            <p className="mt-4 md:mt-0 text-base text-gray-500 dark:text-gray-400">
              &copy; 2024 AppCraft. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
