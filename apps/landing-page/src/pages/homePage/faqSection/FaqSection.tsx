import { Heading } from "../../../components/Typography";
import faqs from "../../../data/faqs.json";
import { Faq } from "./types";

export const FaqSection = () => {
	return (
		<div id="faq" className="lg:mt-36 flex flex-col lg:w-3/4 w-5/6 m-auto">
			<Heading>FAQ</Heading>
            
			{faqs.map((faq: Faq) => (
				<FaqAccordion faq={faq} />
			))}
		</div>
	);
};

const FaqAccordion = (props: { faq: Faq }) => {
	return (
		<div className="collapse collapse-arrow bg-base-200 my-2">
			<input type="checkbox" name="my-accordion-2" />
			<div className="collapse-title text-xl font-medium">{props.faq.question}</div>
			<div className="collapse-content">
				<p dangerouslySetInnerHTML={{ __html: props.faq.answer }}></p>
			</div>
		</div>
	);
};