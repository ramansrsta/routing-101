import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
function FilteredEvents(props) {
	const router = useRouter();
	// const filteredData = router.query.slug;

	// if (!filteredData) {
	// 	return <p className="center"> Loading ...</p>;
	// }

	// const [filteredYear, filteredMonth] = filteredData;

	// const numYear = +filteredYear;
	// const numMonth = +filteredMonth;

	const filteredEvents = props.events;

	if (!filteredEvents || filteredEvents.length === 0) {
		return <p> No Events Found For Filtered Event </p>;
	}
	return (
		<div>
			{props.hasError ? (
				<p> Invalid Filter, Please Enter valid Filter Values </p>
			) : (
				<EventList item={filteredEvents} />
			)}
		</div>
	);
}

export async function getServerSideProps(context) {
	const { params } = context;
	const filteredData = params.slug;
	const [filteredYear, filteredMonth] = filteredData;

	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 2021 ||
		numMonth < 1 ||
		numMonth > 12
	) {
		return {
			props: {
				hasError: true,
			},
		};
	}

	const filteredEvents = await getFilteredEvents({
		year: numYear,
		month: numMonth,
	});
	return {
		props: {
			events: filteredEvents,
		},
	};
}

export default FilteredEvents;
