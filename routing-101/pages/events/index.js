import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";
function AllEventsPage(props) {
	const { events } = props;
	const router = useRouter();

	const findEventsHandler = (year, month) => {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath);
	};
	return (
		<div>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList item={events} />
		</div>
	);
}

export async function getStaticProps() {
	const events = await getAllEvents();
	return {
		props: {
			events: events,
		},
		revalidate: 1800,
	};
}

export default AllEventsPage;
