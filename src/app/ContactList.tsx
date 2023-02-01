import React from 'react';
import ContactBookApi, { Contact } from '../ContactBookApi';



export default class ContactList extends React.PureComponent<ContactListProps, ContactListState> {

    public state = {
        contacts: undefined
    }

    public async componentDidMount() {
        const api = ContactBookApi.getInstance();
        const contacts = await api.listContacts()
        this.setState({ contacts })
    }

    private renderContact(contact: Contact) {
        return <li key={contact.id} data-testid={contact.id}>{contact.first_name}</li>
    }


    public render() {

        const { onClickAdd } = this.props;
        const { contacts } = this.state

        return (
            <div data-testid="contacts">
                <ol>
                    {contacts && (contacts as Contact[]).map(c => this.renderContact(c))}
                </ol>
                <button data-testid="add" onClick={onClickAdd}>Add</button>
            </div>
        );
    }
}

export type OnClickAddHandler = () => void | Promise<void>;

interface ContactListProps {
    onClickAdd: OnClickAddHandler
}

interface ContactListState {
    contacts: Contact[] | undefined
}