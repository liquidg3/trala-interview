/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { act, render, screen } from '@testing-library/react';
import ContactList, { OnClickAddHandler } from '../../app/ContactList';
import userEvent from '@testing-library/user-event';
import { ApiFixture, spyFetch } from '../support/spyFetch';
import { generateDummyContact } from '../support/generateDummyContact';
import ContactBookApi from '../../ContactBookApi';
import { LIST_CONTACTS_URL } from '../LIST_CONTACTS_URL';

beforeEach(() => {
    ContactBookApi.reset()
    ContactBookApi.getInstance(spyFetch)
    ApiFixture.lastUrl = undefined;
})

test('contact list renders add button', async () => {
    await setup()
    getAddButton();
})

test('clicking add button invokes onClickAdd handler', async () => {
    let wasHit = false;

    await setup(() => {
        wasHit = true
    })

    await act(async () => {
        const button = getAddButton()
        userEvent.click(button);
    })

    expect(wasHit).toBe(true)
})

test('loads contacts on load', async () => {
    await fakeContactsAndRender();
    expect(ApiFixture.lastUrl).toEqual(LIST_CONTACTS_URL)

})

test('actually renders rows for contacts', async () => {
    await act(async () => {
        fakeContactsAndRender();
    })

    screen.getByTestId(ApiFixture.fakedResponse[0].id)
})

async function fakeContactsAndRender() {
    ApiFixture.fakedResponse = [
        generateDummyContact()
    ];

    await setup();
}

function getAddButton() {
    return screen.getByTestId('add');
}

async function setup(onClickAdd?: OnClickAddHandler) {
    await act(() => render(<ContactList onClickAdd={onClickAdd ?? (() => { })} />))
}


