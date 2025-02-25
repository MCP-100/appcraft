import TemplateCard from './TemplateCard';

// Sample template data
const templates = [
  {
    id: 'nextjs',
    title: 'Next.js App',
    description: 'Create a modern web application with Next.js, React, and Tailwind CSS.',
    icon: '/icons/nextjs.svg',
    href: '/create/nextjs',
    bgColor: 'bg-black/5 dark:bg-white/5'
  },
  {
    id: 'react',
    title: 'React App',
    description: 'Build a single-page application with React and Vite.',
    icon: '/icons/react.svg',
    href: '/create/react',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20'
  },
  {
    id: 'vue',
    title: 'Vue.js App',
    description: 'Develop a responsive application with Vue.js and Vite.',
    icon: '/icons/vue.svg',
    href: '/create/vue',
    bgColor: 'bg-green-50 dark:bg-green-950/20'
  },
  {
    id: 'svelte',
    title: 'Svelte App',
    description: 'Create a fast, efficient app with Svelte and SvelteKit.',
    icon: '/icons/svelte.svg',
    href: '/create/svelte',
    bgColor: 'bg-orange-50 dark:bg-orange-950/20'
  },
  {
    id: 'mobile',
    title: 'Mobile App',
    description: 'Build a cross-platform mobile app with React Native or Expo.',
    icon: '/icons/mobile.svg',
    href: '/create/mobile',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20'
  },
  {
    id: 'landing',
    title: 'Landing Page',
    description: 'Create a beautiful landing page for your product or service.',
    icon: '/icons/landing.svg',
    href: '/create/landing',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950/20'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Store',
    description: 'Build an online store with product listings and checkout.',
    icon: '/icons/ecommerce.svg',
    href: '/create/ecommerce',
    bgColor: 'bg-pink-50 dark:bg-pink-950/20'
  },
  {
    id: 'blog',
    title: 'Blog',
    description: 'Create a content-focused blog with Markdown support.',
    icon: '/icons/blog.svg',
    href: '/create/blog',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950/20'
  },
];

export default function TemplateGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          title={template.title}
          description={template.description}
          icon={template.icon}
          href={template.href}
          bgColor={template.bgColor}
        />
      ))}
    </div>
  );
} 