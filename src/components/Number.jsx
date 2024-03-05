import { Backspace, X, Equals, Minus, Divide, Plus } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { Result } from './Result';
import { History } from './History';

export const Number = () => {
	const [input, setInput] = useState('');
	const [result, setResult] = useState('');
	const [history, setHistory] = useState([]);

	const buttonStyles = {
		basePrimary: 'flex justify-center bg-primary-400 items-center p-4 rounded-full w-20 h-20 ',
		hoverPrimary: 'hover:bg-secondary-200',
	};

	function handleNumber(number) {
		setInput((prevInput) => prevInput + number);
	}

	function handleEqual() {
		const currentResult = eval(input).toString();
		setResult(currentResult);
		setHistory([...history, `${input} = ${currentResult}`]);
	}

	function handleOperator(operator) {
		const lastChar = input.slice(-1);
		const operators = ['+', '-', '*', '/', '%', '.'];

		if (input === '' && operator !== '-') {
			return;
		}

		if (operators.includes(lastChar)) {
			return;
		}

		setInput((prevInput) => prevInput + operator);
	}

	useEffect(() => {
		setInput(result);
	}, [result]);

	function handleAC() {
		setInput('');
		setResult('');
	}

	function handleBackSpace() {
		setInput((prevInput) => prevInput.slice(0, -1));
	}

	return (
		<>
			<div className="bg-primary-300 rounded-3xl w-full sm:w-1/2 lg:w-1/4 h-screen">
				<Result input={input} result={result} />
				<div className="flex flex-col gap-2 my-2 p-2 rounded-3xl text-2xl">
					<div className="place-items-center gap-2 grid grid-cols-4">
						<button onClick={handleAC} className="flex justify-center items-center col-span-2 bg-secondary-400 hover:bg-secondary-200 p-4 rounded-full w-full">
							AC
						</button>
						<button onClick={() => handleOperator('%')} className="flex justify-center items-center bg-primary-200 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">
							%
						</button>
						<button onClick={() => handleOperator('/')} className="flex justify-center items-center bg-primary-200 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">
							<Divide size={32} />
						</button>
						<button onClick={() => handleNumber('7')} className={`${buttonStyles.basePrimary} ${buttonStyles.hoverPrimary}`}>
							7
						</button>
						<button onClick={() => handleNumber('8')} className={`${buttonStyles.basePrimary} ${buttonStyles.hoverPrimary}`}>
							8
						</button>
						<button onClick={() => handleNumber('9')} className={`${buttonStyles.basePrimary} ${buttonStyles.hoverPrimary}`}>
							9
						</button>
						<button onClick={() => handleOperator('*')} className="flex justify-center items-center bg-primary-200 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">
							<X size={32} />
						</button>
						<button onClick={() => handleNumber('4')} className={`${buttonStyles.basePrimary} ${buttonStyles.hoverPrimary}`}>
							4
						</button>
						<button onClick={() => handleNumber('5')} className={`${buttonStyles.basePrimary} ${buttonStyles.hoverPrimary}`}>
							5
						</button>
						<button onClick={() => handleNumber('6')} className={`${buttonStyles.basePrimary} ${buttonStyles.hoverPrimary}`}>
							6
						</button>
						<button onClick={() => handleOperator('-')} className="flex justify-center items-center bg-primary-200 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">
							<Minus size={32} />
						</button>
						<button onClick={() => handleNumber('1')} className={`${buttonStyles.basePrimary} ${buttonStyles.hoverPrimary}`}>
							1
						</button>
						<button onClick={() => handleNumber('2')} className={`${buttonStyles.basePrimary} ${buttonStyles.hoverPrimary}`}>
							2
						</button>
						<button onClick={() => handleNumber('3')} className={`${buttonStyles.basePrimary} ${buttonStyles.hoverPrimary}`}>
							3
						</button>
						<button onClick={() => handleOperator('+')} className="flex justify-center items-center bg-primary-200 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">
							<Plus size={32} />
						</button>
						<button onClick={() => handleNumber('0')} className={`${buttonStyles.basePrimary} ${buttonStyles.hoverPrimary}`}>
							0
						</button>
						<button onClick={() => handleOperator('.')} className={`${buttonStyles.basePrimary} ${buttonStyles.hoverPrimary}`}>
							.
						</button>
						<button onClick={handleBackSpace} className={`${buttonStyles.basePrimary} ${buttonStyles.hoverPrimary}`}>
							<Backspace size={32} />
						</button>
						<button onClick={handleEqual} className="flex justify-center items-center bg-secondary-200 hover:bg-secondary-200 p-4 rounded-full w-20 h-20">
							<Equals size={32} />
						</button>
					</div>
				</div>
			</div>
			<div className="bg-primary-300 rounded-3xl w-full sm:w-1/2 lg:w-1/4 h-screen">
				<History history={history} result={result} setHistory={setHistory} />
			</div>
		</>
	);
};
