import React, { SyntheticEvent } from 'react';
import { Dispatch } from 'redux';
import TextField from '../atoms/TextField';
import './SearchTextField.scss';

interface SearchTextFieldProps {
  dispatchUpdateSearchQuery?: (value: string) => Dispatch;
  dispatchHideRepositoryDetails?: () => Dispatch;
}

interface SearchTextFieldState {
  inputValue: string;
}

class SearchTextField extends React.Component<SearchTextFieldProps, SearchTextFieldState> {
  public constructor(props: SearchTextFieldProps) {
    super(props);
    this.state = { inputValue: '' };
  }

  private onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.currentTarget.value }, () => {
      if (this.state.inputValue.length > 0 && this.props.dispatchUpdateSearchQuery) {
        this.props.dispatchUpdateSearchQuery(this.state.inputValue);
      }
      if (this.props.dispatchHideRepositoryDetails) {
        this.props.dispatchHideRepositoryDetails();
      }
    });
  };

  public render() {
    return (
      <TextField
        value={this.state.inputValue}
        onChange={this.onChange}
        placeholder="Search repository name"
        className="SearchTextField"
      />
    );
  }
}

export default SearchTextField;
