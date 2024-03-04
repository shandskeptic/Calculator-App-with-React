import { Backspace, X, Equals, Minus, Divide } from '@phosphor-icons/react';

export const Number = () => {
	return (
		<div className="flex flex-col gap-2 my-2 p-2 rounded-3xl text-2xl">
			<div className="gap-2 grid grid-cols-2 place-ite">
				<button className="flex justify-center items-center bg-primary-400 hover:bg-secondary-200 p-4 rounded-full">History</button>
				<button className="flex justify-center items-center bg-secondary-400 hover:bg-secondary-200 p-4 rounded-full">AC</button>
			</div>
			<div className="place-items-center gap-2 grid grid-cols-4">
				<button className="flex justify-center items-center bg-primary-400 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">7</button>
				<button className="flex justify-center items-center bg-primary-400 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">8</button>
				<button className="flex justify-center items-center bg-primary-400 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">9</button>
				<button className="flex justify-center items-center bg-primary-200 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">
					<Divide size={32} />
				</button>
				<button className="flex justify-center items-center bg-primary-400 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">4</button>
				<button className="flex justify-center items-center bg-primary-400 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">5</button>
				<button className="flex justify-center items-center bg-primary-400 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">6</button>
				<button className="flex justify-center items-center bg-primary-200 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">
					<X size={32} />
				</button>
				<button className="flex justify-center items-center bg-primary-400 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">1</button>
				<button className="flex justify-center items-center bg-primary-400 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">2</button>
				<button className="flex justify-center items-center bg-primary-400 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">3</button>
				<button className="flex justify-center items-center bg-primary-200 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">
					<Minus size={32} />
				</button>
				<button className="flex justify-center items-center bg-primary-400 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">0</button>
				<button className="flex justify-center items-center bg-primary-400 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">,</button>
				<button className="flex justify-center items-center bg-primary-400 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">
					<Backspace size={32} />
				</button>
				<button className="flex justify-center items-center bg-secondary-200 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">
					<Equals size={32} />
				</button>
			</div>
		</div>
	);
};
