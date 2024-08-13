export enum Typo {
	TITLE,
	TITLE_2,
	TITLE_3,
	TITLE_4,
	SUBTITLE,
	PARAGRAPH,
}

// All text should be wrapped in this component
export const Text: React.FC<{ children: React.ReactNode; typo?: Typo; className?: string }> = (
	props
) => {
	switch (props.typo) {
		case Typo.TITLE:
			return <h1 className={"lg:text-9xl md:text-8xl sm:text-7xl xs:text-6xl text-4xl font-bold font-display " + props.className}>{props.children}</h1>;
		case Typo.TITLE_2:
			return <h2 className={"md:text-6xl sm:text-5xl text-3xl font-display " + props.className}>{props.children}</h2>;
		case Typo.TITLE_3:
			return <h3 className={"md:text-4xl sm:text-2xl text-xl font-bold text-secondary " + props.className}>{props.children}</h3>;
		case Typo.TITLE_4:
			return <h4 className={"md:text-2xl sm:text-xl text-lg font-bold " + props.className}>{props.children}</h4>;
		case Typo.SUBTITLE:
			return <h5 className={"sm:text-base text-xs " + props.className}>{props.children}</h5>;
		case Typo.PARAGRAPH:
			return <p className={"" + props.className}>{props.children}</p>;
		default:
			return <div className={props.className}>{props.children}</div>;
	}
};

export const Heading = (props: { children: React.ReactNode }) => {
	return (
		<div className="my-14 mt-32 px-20 ">
			<a className="flex justify-center items-center" href="heading">
				<Text typo={Typo.TITLE_2}>❆*</Text>
				<Text typo={Typo.TITLE_2} className="mx-10 font-bold text-center ">{props.children}</Text>
				<Text typo={Typo.TITLE_2}>*❆</Text>
			</a>
		</div>
	);
};
