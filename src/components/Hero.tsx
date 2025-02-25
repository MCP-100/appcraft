import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-black pt-24 pb-12 sm:pt-32 sm:pb-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 opacity-50"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-200/30 to-transparent dark:from-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-200/30 to-transparent dark:from-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            <span className="block">Idea to app in seconds.</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Build anything with AppCraft
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            AppCraft is your superhuman full-stack engineer. Prompt, run, edit, and deploy full-stack web and mobile apps with ease.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/create"
              className="rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:from-blue-700 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Building
            </Link>
            <Link
              href="/templates"
              className="text-lg font-semibold leading-6 text-gray-900 dark:text-white hover:underline"
            >
              Explore Templates <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 