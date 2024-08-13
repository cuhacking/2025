import { PAST_SPONSOR_IMAGES } from "./cuHackingPastSponsors";

export const PastSponsors = () => {
  return (
    <div className="w-5/6 mx-auto grid grid-cols-2 md:grid-cols-5 gap-x-14 gap-y-14 place-items-center">
      {PAST_SPONSOR_IMAGES.map((sponsor, index) => (
        <a href={sponsor.url} target="_blank" rel="noopener noreferrer" key={index}>
          <img
            className="max-h-24 w-auto transition-transform duration-500 hover:scale-110"
            src={sponsor.imgSrc}
            alt="Sponsor logo"
          />
        </a>
      ))}
    </div>
  );
};

