import { PAST_SPONSOR_IMAGES } from "./cuHackingPastSponsors";

export const PastSponsors = () => {
  return (
    <div className="grid w-5/6 grid-cols-2 mx-auto md:grid-cols-5 gap-x-14 gap-y-14 place-items-center">
      {PAST_SPONSOR_IMAGES.map((sponsor, index) => (
        <a href={sponsor.url} target="_blank" rel="noopener noreferrer" key={index}>
          <img
            className="w-auto transition-transform duration-500 max-h-24 hover:scale-110"
            src={sponsor.imgSrc}
            alt="Sponsor logo"
          />
        </a>
      ))}
    </div>
  );
};

