import React from 'react';

export default class ContactDialog extends React.PureComponent<ContactDialogProps> {
    public render() {

        const { onClickClose } = this.props;

        return <div data-testid="add-dialog">
            <header>
                <button data-testid="close" onClick={onClickClose}>close</button>
            </header>
            i'm adding a human
        </div>;
    }
}


interface ContactDialogProps {
    onClickClose: OnClickCloseHandler
}

type OnClickCloseHandler = () => void | Promise<void>;