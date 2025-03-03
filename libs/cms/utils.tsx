import React from 'react';
import Preview from '../../apps/email/templates/cuhacking/registered-for-hackathon';
import { render } from '@react-email/render';

export async function generateEmail() {
  const html = await render(<Preview />, {
    pretty: true,
  });
  return html;
}
