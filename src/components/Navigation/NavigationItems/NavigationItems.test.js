import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

// enzyme conected
configure({adapter: new Adapter()});

describe('<NavitagionItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it('should render two <NavitagionItem /> elemnts if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render two <NavitagionItem /> elemnts if authenticated', () => {
        wrapper = shallow(<NavigationItems isAuthenticated />);
        // wrapper.setPost({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should render two <NavitagionItem /> elemnts if authenticated', () => {
        wrapper = shallow(<NavigationItems isAuthenticated />);
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
});