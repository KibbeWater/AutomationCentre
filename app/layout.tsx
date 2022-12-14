import Navbar from '../components/Navbar';
import '../styles/globals.css';

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</head>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
