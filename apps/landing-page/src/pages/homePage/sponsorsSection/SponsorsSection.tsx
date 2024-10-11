import { Heading } from "../../../components/Typography";
import { PastSponsors } from "./PastSponsors";

export const SponsorsSection = () => {
  return (
      <div id="sponsors" className="mb-16 lg:mt-36">
        <Heading>Past Sponsors</Heading>
        <PastSponsors />
      </div>
  );
};
