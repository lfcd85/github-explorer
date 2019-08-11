import React from 'react';
import TextField from '../atoms/TextField'

export interface SearchTextFieldState {
  inputValue: string
}

class SearchTextField extends React.Component<{}, SearchTextFieldState> {
  constructor(props: any) {
    super(props);
    this.state = { inputValue: '' };
  }

  onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.currentTarget.value });
  }

  render() {
    return (
      <form>
        <TextField
          value={this.state.inputValue}
          onChange={this.onChange}
          placeholder='This is SearchTextField.'
        />
      </form>
    );
  }
}

export default SearchTextField;
