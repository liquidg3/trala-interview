import React from 'react';
import ContactDialog from './ContactDialog';
import ContactList from './ContactList';



export default class App extends React.PureComponent<AppProps, AppState> {
  public state = {
    shouldShowAddDialog: false
  }

  private handleClickCloseAddDialog() {
    this.setShouldAddDialog(false);
  }

  private handleClickAddPerson() {
    this.setShouldAddDialog(true);
  }

  private setShouldAddDialog(shouldShow: boolean) {
    this.setState({ shouldShowAddDialog: shouldShow });
  }

  public render() {

    const { shouldShowAddDialog } = this.state
    return (
      <div className="App">
        <ContactList onClickAdd={this.handleClickAddPerson.bind(this)} />
        {shouldShowAddDialog && <ContactDialog onClickClose={this.handleClickCloseAddDialog.bind(this)} />}
      </div>
    );
  }
}

interface AppProps {

}

interface AppState {
  shouldShowAddDialog: boolean;
}