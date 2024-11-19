import GlassmorphicCard from '@cuhacking/ui/components/glassmorphic-card/glassmorphic-card';
import TerminalText from '@cuhacking/ui/components/terminal-text/terminal-text';
import Socials from '../socials/socials';
interface Media {
  src: string;
  alt: string;
}

interface IntroProps {
  socials: { link: string; media: Media }[];
}
// TODO: Refactor so that it takes in props, not sure right now how to deal with rich-text
function Intro({ socials }: IntroProps) {
  return (
    <GlassmorphicCard
      variant="default"
      className="flex flex-col items-start p-3.5 sm:p-6 gap-y-2.5"
    >
      <h2 className="text-2xl font-bold text-center">HELLO, WORLD</h2>
      <div>
        <TerminalText className="text-base">
          <p>
            <span className="text-transparent bg-greendiant bg-clip-text">
              cuHacking
            </span>{' '}
            is coming to you{' '}
            <span className="text-transparent bg-greendiant bg-clip-text">
              Mar. 14 - 16 2025 @ Carleton University
            </span>
          </p>
        </TerminalText>
        <TerminalText className="text-base">
          <p>In the meantime, check out all the cool stuff we're working on!</p>
        </TerminalText>
        <Socials socials={socials} className="justify-center pt-5" />
      </div>
    </GlassmorphicCard>
  );
}

export default Intro;
