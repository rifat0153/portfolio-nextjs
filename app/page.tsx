import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <p className="text-7xl text-red-500">Hello World</p>;
}
