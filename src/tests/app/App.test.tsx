import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../app/App';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  setup();
})

test('app renders contact list', async () => {
  await getContactList();
});


test('clicking add button renders dialog', async () => {
  clickAddContact();
  screen.getByTestId('add-dialog');
})

test('no add dialog to start', async () => {
  assertAddDialogNotRendering();
})

test('clicking close dialog hides dialog', async () => {
  clickAddContact();
  const closeBtn = screen.getByTestId('close');
  userEvent.click(closeBtn);
  assertAddDialogNotRendering();
})

function assertAddDialogNotRendering() {
  const addDialog = screen.queryByTestId('add-dialog');
  expect(addDialog).toBeFalsy();
}

function clickAddContact() {
  const add = screen.getByTestId('add');
  userEvent.click(add);
}

async function getContactList() {
  return await screen.findByTestId('contacts');
}

function setup() {
  render(<App />);
}

