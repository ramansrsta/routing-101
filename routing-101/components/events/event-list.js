import EventItem from "./event-item";

function EventList(props) {
	const { item } = props;

	return (
		<ul>
			{item.map((event) => (
				<EventItem
					key={event.id}
					id={event.id}
					title={event.title}
					location={event.location}
					date={event.date}
					image={event.image}
				/>
			))}
		</ul>
	);
}

export default EventList;
