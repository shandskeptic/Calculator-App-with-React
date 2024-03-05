import { Number } from './Number';

export const Layout = () => {
	return (
		<>
			<div className="flex sm:flex-row flex-col justify-center items-center gap-4 bg-primary-400 font-semibold text-white">
				<Number />
			</div>
		</>
	);
};
