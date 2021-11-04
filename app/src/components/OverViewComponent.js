import { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ Expenses, Income, addTransAction }) => {
	const [IsShow, setIsShow] = useState(false);

	return (
		<>
			<div className=" flex justify-between items-center">
				<p className=" text-lg">Balance ${Income - Expenses}</p>
				<button
					onClick={() => setIsShow((prevState) => !prevState)}
					className=" rounded-md w-16 h-8 bg-gray-700 text-white"
				>
					{IsShow ? "Cancel" : "Add"}
				</button>
			</div>
			{IsShow && <TransActionForm addTransAction={addTransAction} setIsShow={setIsShow} />}
			<div className=" mx-auto my-2 flex justify-between items-center w-4/5 h-20">
				<div className=" mr-2 flex justify-center items-center border-2 border-solid border-red-500 w-32 h-16 rounded-md text-red-500">
					Experses {Expenses}
				</div>
				<div className=" ml-2 flex justify-center items-center border-2 border-solid border-green-500 w-32 h-16 rounded-md text-green-500">
					Income {Income}
				</div>
			</div>
		</>
	);
};

export default OverViewComponent;
