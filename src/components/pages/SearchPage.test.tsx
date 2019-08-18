import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SearchPage from './SearchPage';
import App from '../App';
import PageTitle from '../molecules/PageTitle';
import RepositoryList from '../organisms/RepositoryListContainer';
import RepositoryDetails from '../organisms/RepositoryDetailsContainer';
import { mockRepositoryDetails } from '../organisms/RepositoryDetails.test';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <App>
      <SearchPage />
    </App>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders one PageTitle component', () => {
  const wrapper = shallow(<SearchPage />);
  expect(wrapper.find(PageTitle).length).toBe(1);
});

it('renders one RepositoryList component when repository is not selected', () => {
  const wrapper = shallow(<SearchPage repositoryDetails={{}} />);
  expect(wrapper.find(RepositoryList).length).toBe(1);
  expect(wrapper.find(RepositoryDetails).length).toBe(0);
});

it('renders one RepositoryDetails component when repository is selected', () => {
  const wrapper = shallow(<SearchPage repositoryDetails={mockRepositoryDetails} />);
  expect(wrapper.find(RepositoryDetails).length).toBe(1);
  expect(wrapper.find(RepositoryList).length).toBe(0);
});
