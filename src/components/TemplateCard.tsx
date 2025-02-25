import Link from 'next/link';
import Image from 'next/image';

interface TemplateCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  bgColor?: string;
}

export default function TemplateCard({ title, description, icon, href, bgColor = 'bg-gray-50 dark:bg-gray-900' }: TemplateCardProps) {
  return (
    <Link 
      href={href}
      className={`group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 ${bgColor} p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200 hover:shadow-md`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
          <Image 
            src={icon} 
            alt={title} 
            width={24} 
            height={24} 
            className="h-6 w-6 text-blue-600 dark:text-blue-400" 
          />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">{description}</p>
      <div className="mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
        Use template
        <svg 
          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
} 