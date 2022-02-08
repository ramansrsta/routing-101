import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage() {
	const featuredEvents = getFeaturedEvents();
	return (
		<div>
			<EventList item={featuredEvents} />
		</div>
	);
}

export default HomePage;
