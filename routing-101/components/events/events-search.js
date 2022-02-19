import Button from "../ui/button";
import classes from "./events-search.module.css";
import { useRef } from "react";
function EventsSearch(props) {
	const yearInputRef = useRef();
	const monthInputRef = useRef();
	const submitHandler = (event) => {
		event.preventDefault();
		const selectedYear = yearInputRef.current.value;
		const selectedMonth = monthInputRef.current.value;

		props.onSearch(selectedYear, selectedMonth);
	};
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.controls}>
				<div className={classes.control}>
					<label htmlFor="year">Year</label>
					<select id="year" ref={yearInputRef}>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
					</select>
				</div>
				<div className={classes.control}>
					<label htmlFor="month">Month</label>
					<select id="month" ref={monthInputRef}>
						<option value="1">January</option>
						<option value="2">February</option>
					</select>
				</div>
			</div>
			<Button>Find Events</Button>
		</form>
	);
}

export default EventsSearch;
