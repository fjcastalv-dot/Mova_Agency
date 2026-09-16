export type ActivePage = 'home' | 'methodology' | 'about' | 'services' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  category: string;
  tags?: string[];
  image?: string;
  highlightColor?: string;
  gridSpan: string; // e.g. "col-span-12 md:col-span-7"
  isDark?: boolean;
  isTerracotta?: boolean;
}

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
  details: string[];
}

export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
}
