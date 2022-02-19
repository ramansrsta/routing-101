import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
function FilteredEvents() {
	const router = useRouter();
	const filteredData = router.query.slug;

	if (!filteredData) {
		return <p className="center"> Loading ...</p>;
	}

	const [filteredYear, filteredMonth] = filteredData;

	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	console.log(numMonth, numYear, "hahha");

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 2021 ||
		numMonth < 1 ||
		numMonth > 12
	) {
		return <p> Invalid Filter, Please Enter valid Filter Values </p>;
	}

	const filteredEvents = getFilteredEvents({
		year: numYear,
		month: numMonth,
	});

	if (!filteredEvents || filteredEvents.length === 0) {
		return <p> No Events Found For Filtered Event </p>;
	}
	return (
		<div>
			<EventList item={filteredEvents} />
		</div>
	);
}

export default FilteredEvents;
