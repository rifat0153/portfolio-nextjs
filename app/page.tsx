import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return <p className="text-red-500 text-7xl">Hello World</p>;
}
