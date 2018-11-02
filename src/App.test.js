import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
Enzyme.configure({ adapter: new Adapter() });

describe('App should render', () => {

	it('renders without crashing', () => {
		const wrapper = shallow(<App/>);
		const buttons = wrapper.state();
		expect(Object.keys(buttons).length).toEqual(3);
	});

	it('should render 3 P Comp', function () {
		const wrapper = shallow(<App/>);
		const pElements = wrapper.find('p');
		expect(pElements.length).toEqual(3)
		const buttonElements = wrapper.find('button');
		expect(buttonElements.length).toEqual(3)
	});

	it('should match the snapshot', function () {
		const jsonTree = renderer.create(<App/>);
		expect(jsonTree).toMatchSnapshot();
	});

	it('should match the snapshot after first button clicked', function () {
		const jsonTree = renderer.create(<App/>);
		expect(jsonTree).toMatchSnapshot();
	});

})
