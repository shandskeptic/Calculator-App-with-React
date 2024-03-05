import PropTypes from 'prop-types';

export const Result = ({ input, result }) => {
	return (
		<div className="flex flex-col gap-4 bg-primary-200 p-4 rounded-3xl h-1/4">
			<div className="flex justify-end my-2 h-1/2 text-5xl overflow-hidden">
				<h2>{input}</h2>
			</div>
			<div className="flex justify-end my-2 h-1/3 text-2xl overflow-hidden">
				<h2>{result}</h2>
			</div>
		</div>
	);
};

Result.propTypes = {
	input: PropTypes.string.isRequired,
	result: PropTypes.string.isRequired,
};
