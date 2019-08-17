import React, { SyntheticEvent } from 'react';
import TextField from '../atoms/TextField';
import './SearchTextField.scss';

export interface SearchTextFieldProps {
  dispatchUpdateSearchQuery?: any;
  dispatchHideRepositoryDetails?: any;
}

export interface SearchTextFieldState {
  inputValue: string,
}

class SearchTextField extends React.Component<SearchTextFieldProps, SearchTextFieldState> {
  constructor(props: any) {
    super(props);
    this.state = { inputValue: '' };
  }

  onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.currentTarget.value }, () => {
      if (this.state.inputValue.length > 0) {
        this.props.dispatchUpdateSearchQuery(this.state.inputValue);
        this.props.dispatchHideRepositoryDetails();
      }
    });
  }

  render() {
    return (
      <TextField
        value={this.state.inputValue}
        onChange={this.onChange}
        placeholder='Search repository name'
        className='SearchTextField'
      />
    );
  }
}

export default SearchTextField;
