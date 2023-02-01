import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactDialog from '../../app/ContactDialog';
import { OnClickAddHandler } from '../../app/ContactList';
import userEvent from '@testing-library/user-event';


test('contact dialog renders close button', async () => {
    setup();
    await getCloseButton();
})

test('clicking close invokes onClickCloseHandler', async () => {
    let wasHit = false;

    setup(() => {
        wasHit = true;
    });

    const btn = await getCloseButton();
    userEvent.click(btn);

    expect(wasHit).toBeTruthy()

})

async function getCloseButton() {
    return await screen.findByTestId('close');
}

function setup(cb?: OnClickAddHandler) {
    render(<ContactDialog onClickClose={cb ?? (() => { })} />);
}
