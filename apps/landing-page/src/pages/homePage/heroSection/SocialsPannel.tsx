import { FrostedPanel } from "../../../components/FrostedPanel";
import { Text, Typo } from "../../../components/Typography";
import { FaGithub, FaFigma, FaInstagram, FaEnvelope, FaBookOpen } from "react-icons/fa";

export const SocialsPannel = (props: { id?: string; className?: string }) => {
  return (
    <FrostedPanel className={props.className} id={props.id}>
      <div className="flex flex-col items-center justify-center space-y-5">
        <Text typo={Typo.TITLE_3}>Coming March 2025!</Text>
        <Text typo={Typo.TITLE}>cuHacking</Text>
        <Text typo={Typo.SUBTITLE} className="text-center">
          Carleton University's Official Hackathon
        </Text>
       {/* Icons Section */}
      <div className="flex mt-4 space-x-4">

        {/* Instagram Link */}
        <a href="https://www.instagram.com/cuhacking/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="w-8 h-8 text-gray-600 transition-colors hover:text-[#0366D6]" /> {/* Instagram color */}
        </a>
        
        {/* GitHub Link */}
        <a href="https://github.com/cuhacking/2025" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="w-8 h-8 text-gray-600 transition-colors hover:text-[#0366D6]" /> {/* GitHub color */}
        </a>

        {/* Email Link */}
        <a href="mailto:info@cuhacking.ca" aria-label="Email">
          <FaEnvelope className="w-8 h-8 text-gray-600 transition-colors hover:text-[#0366D6]" />
        </a>

        {/* Docs Link */}
        <a href="https://docs.cuhacking.ca" target="_blank" rel="noopener noreferrer" aria-label="Docs">
          <FaBookOpen className="w-8 h-8 text-gray-600 transition-colors hover:text-[#0366D6]" />
        </a>

        {/* Figma Link */}
        <a href="https://www.figma.com/files/team/1400857924219798056/project/261344209/2025?fuid=1196916890248607098" target="_blank" rel="noopener noreferrer" aria-label="Figma">
          <FaFigma className="w-8 h-8 text-gray-600 transition-colors hover:text-[#0366D6]" /> {/* Figma color */}
        </a>
        
        <a  className="text-gray-600 hover:text-[#0366D6] w-[24px] h-[32px]" 
        href="https://linktr.ee/cuhacking_"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="LinkTree">
          <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision" image-rendering="optimizeQuality"
            fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 417 512.238">
            <path fill="currentColor" fill-rule="nonzero" d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 
            37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z"/>
          </svg>        
        </a>



        {/* Storybook Link (Coming Soon) 
        <a href="https://storybook.js.org" target="_blank" rel="noopener noreferrer" aria-label="Storybook">
          <SiStorybook className="w-8 h-8 text-gray-400 transition-colors hover:text-gray-400" />
        </a>*/}

        {/* Chromatic Link (Coming Soon) 
        <a href="https://www.chromatic.com" target="_blank" rel="noopener noreferrer" aria-label="Chromatic">
          <SiChromatic className="w-8 h-8 text-gray-400 transition-colors hover:text-gray-400" />
        </a>*/}

      </div>
        {/* Note Section */}
        <Text typo={Typo.SUBTITLE_2} className="mt-4 text-center">
          Site under construction. We're hard at work!
        </Text>
      </div>
    </FrostedPanel>
  );
};
