import { Heading, Typo, Text } from "../../../components/Typography";
import { ImageCarousel } from "./ImageCarousel";

export const AboutSection = () => {
    return (
     <div className="AboutSection">
          <Heading>What is cuHacking?</Heading>
          <ImageCarousel />
          <Text typo={Typo.PARAGRAPH}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est.
          </Text>
        </div>
    );
};
