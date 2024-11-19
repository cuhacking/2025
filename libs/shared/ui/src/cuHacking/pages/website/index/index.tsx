import { STAT_CONTAINER_CONSTANTS } from '@cuhacking/ui/components/stat/stat.container.constants';
import { EVENT_CONSTANTS } from '@cuhacking/ui/components/event-card/event.constants';
import { SPONSORSHIP_CONSTANTS } from '@cuhacking/ui/components/sponsorship/sponsorship.constants';
import { FAQ_CONTAINER_CONSTANTS } from '@cuhacking/ui/components/faq/faq.constants';
import { INTRO_CONSTANTS } from '@cuhacking/ui/components/intro/intro.constants';
import { MISSION_CONSTANTS } from '@cuhacking/ui/components/mission/mission.constants';
import Spline from '@splinetool/react-spline';
import Intro from '@cuhacking/ui/components/intro/intro';
import Mission from '@cuhacking/ui/components/mission/mission';
import StatContainer from '@cuhacking/ui/components/stat/stat.container';
import EventContainer from '@cuhacking/ui/components/event-card/event.container';
import SponsorshipContainer from '@cuhacking/ui/components/sponsorship/sponsorship.container';
import FAQContainer from '@cuhacking/ui/components/faq/faq.container';
import Layout from '@cuhacking/ui/layout/layout';

function Index() {
  return (
    <Layout>
      <div className="relative flex justify-center w-full">
        <Spline
          className="absolute top-0 scale-[1.2]"
          scene="https://prod.spline.design/nnjZJFW1wThAacUS/scene.splinecode"
        />
        <div className="w-full h-screen max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
          <section className="w-full lg:w-3/5">
            <Intro socials={INTRO_CONSTANTS.SOCIALS} />
          </section>
        </div>
      </div>

      <div className="relative flex justify-center w-full">
        <Spline
          className="absolute top-0 scale-[1.2]"
          scene="https://prod.spline.design/TGlqj05806lq8PRV/scene.splinecode"
        />
        <div className="max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
          <section id="about" className="relative min-h-[160vh] lg:min-h-screen w-full">
            <Mission logo={MISSION_CONSTANTS.LOGO} />
          </section>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="w-full max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
          <section className="w-full">
            <StatContainer stats={STAT_CONTAINER_CONSTANTS.STATS} />
          </section>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="w-full max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
          <section id="events" className="w-full">
            <EventContainer events={EVENT_CONSTANTS.EVENTS} />
          </section>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="w-full max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
          <section id="sponsors" className="w-full">
            <SponsorshipContainer
              sponsors={SPONSORSHIP_CONSTANTS.SPONSORS}
              text={SPONSORSHIP_CONSTANTS.TEXT}
            />
          </section>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="w-full max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
          <section id="faq" className="w-full">
            <FAQContainer questions={FAQ_CONTAINER_CONSTANTS.QUESTIONS} />
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
