const TransActionComponents = ({ TransAction }) => {
	return (
		<section>
			{TransAction.map((T) => (
				<div
					key={T.id}
					className="my-2 px-2 flex justify-between items-center bg-gray-100 h-12 rounded-lg text-gray-700 border-r-4 border-green-500"
                    style={{borderRight: T.type === "expense" && "4px solid red"}}
				>
                    <span>{T.desc}</span>
                    <span>${T.amount}</span>
				</div>
			))}
		</section>
	);
};

export default TransActionComponents;
