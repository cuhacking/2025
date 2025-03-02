import  Preview  from "../../../../apps/email/templates/cuhacking/registered-for-hackathon"
import { render } from '@react-email/render';

export const html = await render(<Preview />, {
  pretty: true,
});
