import Link from "next/link";
import Image from "next/image";
import classes from "./event-item.module.css";
import Button from "../ui/button";

function EventItem(props) {
	const { title, image, date, location, id } = props;

	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const formattedAddress = location.replace(", ", "\n");
	return (
		<li className={classes.item}>
			<Image src={"/" + image} alt={title} width={240} height={160} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2> {title} </h2>
					<div className={classes.date}>
						<time> {humanReadableDate} </time>
					</div>
					<div className={classes.address}>
						<address> {formattedAddress} </address>
					</div>
				</div>
				<div className={classes.actions}>
					<Button link={`/events/${id}`}> Explore Event </Button>
				</div>
			</div>
		</li>
	);
}

export default EventItem;
