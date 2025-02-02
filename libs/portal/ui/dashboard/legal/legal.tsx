// import { Button } from '@/components/ui/button';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion'

export function Legal() {
  return (

    <div className="">

      <h2 className="">Legalities</h2>
      <p className="">
        YO! Before we get into it, read these please.
      </p>
      {/* <Button>s</Button> */}

      <Accordions>
        <Accordion title="MLH Code of Conduct">
          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vRbdbEe5gFMlNSgqbF6bxaKoSOTryUYBu8SYIXT9yS2v-A9UJLEGDZ9AU1hg1m-ghTABC-agLiVv0EF/pub?embedded=true"
            width="800"
            height="400"
          >
          </iframe>

        </Accordion>
        <Accordion title="MLH Terms & Conditions">
          <iframe> src = ''</iframe>
        </Accordion>
        <Accordion title="cuhacking Terms & Conditions">
          <iframe> src = ''</iframe>
        </Accordion>
      </Accordions>
    </div>

  )
}
