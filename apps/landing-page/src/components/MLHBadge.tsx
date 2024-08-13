import mlh from "/mlh.png";
import sos from "/sos.png";

export const MLHBadge = () => {
  return (
    <img
      src={mlh}
      className="absolute top-0 right-[10vh] w-16 md:left-[8vh] md:w-20 lg:w-32"
      alt="MLH Badge"
    />
  );
};

export const StandoutStickersLogo = () => {
  return (
    <img
      src={sos}
      className="w-40"
      alt="Standout Stickers Badge"
      onClick={() =>
        window.open("http://hackp.ac/mlh-StandOutStickers-hackathons")
      }
    />
  );
};
