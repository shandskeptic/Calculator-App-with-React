import PropTypes from 'prop-types';
import { Eraser } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

export const History = ({ history, setHistory }) => {
	const [localHistory, setLocalHistory] = useState(() => {
		const storedHistory = localStorage.getItem('history');
		return storedHistory ? JSON.parse(storedHistory) : [];
	});

	useEffect(() => {
		if (history.length > 0) {
			localStorage.setItem('history', JSON.stringify(history));
			setLocalHistory(history);
		}
	}, [history]);

	function handleEraser() {
		setHistory([]);
		setLocalHistory([]);
		localStorage.setItem('history', JSON.stringify([]));
	}

	return (
		<div className="flex flex-col rounded-3xl h-screen overflow-auto">
			<div className="flex justify-between bg-primary-200 p-2 rounded-t-3xl text-2xl">
				<h1 className="m-2">History</h1>
				<button onClick={handleEraser} className="flex justify-center items-center bg-secondary-400 hover:bg-secondary-200 p-2 rounded-2xl">
					<Eraser size={32} />
				</button>{' '}
			</div>
			<div className="overflow-auto">
				{localHistory.length > 0 &&
					localHistory
						.slice()
						.reverse()
						.map((h, index) => (
							<div key={index} className="flex flex-col border-primary-200 p-2 border-b-2 w-full text-2xl">
								<span className="flex justify-end gap-4 my-4 overflow-hidden">
									<h2>{h}</h2>
								</span>
							</div>
						))}
			</div>
		</div>
	);
};

History.propTypes = {
	history: PropTypes.array.isRequired,
	setHistory: PropTypes.func.isRequired,
};
