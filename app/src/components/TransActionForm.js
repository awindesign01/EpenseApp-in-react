import { useState } from "react";

const TransActionForm = ({ addTransAction, setIsShow }) => {
	const [FormVlaues, setFormVlaues] = useState({
		type: "expense",
		amount: 0,
		desc: "",
	});

	const changeHandler = (e) => {
		setFormVlaues({ ...FormVlaues, [e.target.name]: e.target.value });
	};

	const submithandler = (e) => {
		e.preventDefault();
		addTransAction(FormVlaues);
		setIsShow(false);
	};

	return (
		<form
			className=" mt-2 p-4 border-2 border-solid border-gray-200 rounded-lg"
			onSubmit={submithandler}
		>
			<input
				type="text"
				name="desc"
				placeholder="Amound"
				className=" my-2 px-1 py-1 border-2 border-solid border-gray-200 rounded w-full"
				value={FormVlaues.desc}
				onChange={changeHandler}
			/>
			<input
				type="number"
				name="amount"
				placeholder="Description"
				className=" my-2 px-1 py-1 border-2 border-solid border-gray-200 rounded w-full"
				value={FormVlaues.amount}
				onChange={changeHandler}
			/>
			<div className=" my-2 flex items-center">
				<input
					type="radio"
					name="type"
					checked={FormVlaues.type === "expense"}
					onChange={changeHandler}
					value="expense"
					className=" mr-1"
				/>
				<label>Expenses</label>
				<input
					type="radio"
					name="type"
					checked={FormVlaues.type === "income"}
					onChange={changeHandler}
					value="income"
					className=" ml-3 mr-1"
				/>
				<label>Income</label>
			</div>
			<div className=" mx-auto ">
				<button
					type="submit"
					className="rounded-md w-full h-9 bg-gray-700 text-white flex justify-center items-center"
				>
					Add transAction
				</button>
			</div>
		</form>
	);
};

export default TransActionForm;
