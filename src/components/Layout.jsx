import { History } from './History';
import { Number } from './Number';
import { Result } from './Result';

export const Layout = () => {
	return (
		<>
			<div className="flex sm:flex-row flex-col justify-center items-center gap-4 bg-primary-400 font-semibold text-white">
				<div className="bg-primary-300 rounded-3xl w-full md:w-1/2 lg:w-1/4 h-screen">
					<Result />
					<Number />
				</div>
				<div className="bg-primary-300 rounded-3xl w-full md:w-1/2 lg:w-1/4 h-screen">
					<History />
				</div>
			</div>
		</>
	);
};
