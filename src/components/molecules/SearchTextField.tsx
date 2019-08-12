import React from 'react';
import TextField from '../atoms/TextField';

export interface SearchTextFieldProps {
  dispatchUpdateSearchQuery?: any,
}

export interface SearchTextFieldState {
  inputValue: string,
}

class SearchTextField extends React.Component<SearchTextFieldProps, SearchTextFieldState> {
  constructor(props: any) {
    super(props);
    this.state = { inputValue: '' };
  }

  onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.currentTarget.value }, () => {
      if (this.state.inputValue.length > 0) {
        this.props.dispatchUpdateSearchQuery(this.state.inputValue);
      }
    });
  }

  render() {
    return (
      <TextField
        value={this.state.inputValue}
        onChange={this.onChange}
        placeholder='This is SearchTextField.'
      />
    );
  }
}

export default SearchTextField;
