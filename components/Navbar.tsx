'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const links = [
	{ href: '/', label: 'Home' },
	{ href: '/login', label: 'Login', right: true },
];

type NavLink = {
	href: string;
	label: string;
	right?: boolean;
};

function NavItem({ item, active }: { item: NavLink; active?: boolean }) {
	return (
		<>
			<Link className='text-sm relative' href={item.href} key={'nav-' + item.label.toLowerCase()}>
				{item.label}
				{active ? (
					<motion.div className='absolute w-10 bottom-[-1px] left-0 right-0 h-px bg-red-900' layoutId={'nav-underline'} />
				) : (
					<> </>
				)}
			</Link>
		</>
	);
}

export default function Navbar() {
	const path = usePathname();

	const activeLink = links.find((link) => link.href === path);

	return (
		<nav className='w-screen h-10 flex justify-center items-center'>
			{links.map((item) => (!item.right ? <NavItem item={item} active={activeLink === item} /> : <></>))}
			<h1 className='mx-4 text-lg font-semibold' key={'nav-title'}>
				{'Automation Centre'}
			</h1>
			{links.map((item) => (item.right ? <NavItem item={item} active={activeLink === item} /> : <></>))}
		</nav>
	);
}
