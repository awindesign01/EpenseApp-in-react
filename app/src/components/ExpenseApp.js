import { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponents from "./TransActionComponents";
const ExpenseApp = () => {
	const [Expenses, setExpenses] = useState(0);
	const [Income, setIncome] = useState(0);
	const [TransAction, setTransAction] = useState([]);
	const addTransAction = (FormVlaues) => {
		// console.log(FormVlaues);
		setTransAction([...TransAction, { ...FormVlaues, id: Date.now() }]);
	};

	useEffect(() => {
		let exp = 0;
		let inc = 0;
		TransAction.forEach(t => {
			t.type === "expense" ? (exp = exp + parseFloat(t.amount)) : (inc = inc + parseFloat(t.amount));
		})
		setExpenses(exp);
		setIncome(inc);
	}, [TransAction])

	return (
		<section className=" mx-auto my-6 flex flex-col w-80">
			<OverViewComponent
				Income={Income}
				Expenses={Expenses}
				addTransAction={addTransAction}
			/>
			<TransActionComponents TransAction={TransAction} />
		</section>
	);
};

export default ExpenseApp;
