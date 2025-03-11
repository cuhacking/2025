import React from 'react';
import AccountCreated from '../../apps/email/templates/cuhacking/AccountCreated';
import { render } from '@react-email/render';

export async function generateEmail() {
  const html = await render(<AccountCreated />, {
    pretty: true,
  });
  return html;
}
