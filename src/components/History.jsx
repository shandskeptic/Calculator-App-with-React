import { Eraser } from '@phosphor-icons/react';

export const History = () => {
	return (
		<div className="flex flex-col rounded-3xl h-screen overflow-auto">
			<div className="flex justify-between bg-primary-200 p-2 rounded-t-3xl text-2xl">
				<h1 className="m-2">History</h1>
				<button className="flex justify-center items-center bg-secondary-400 hover:bg-secondary-200 p-2 rounded-2xl">
					<Eraser size={32} />
				</button>{' '}
			</div>
			<div className="overflow-auto">
				<div className="flex flex-col border-primary-200 p-2 border-b-2 w-full text-2xl">
					<span className="flex justify-end gap-4 my-4 text-2xl overflow-hidden">
						<h2>0</h2>
					</span>
				</div>
			</div>
		</div>
	);
};
