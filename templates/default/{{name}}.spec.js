import React from 'react';
import { mount } from 'enzyme';

import {{name}} from './{{name}}';

describe('{{name}} component', () => {
    it('should match snapshot', () => {
        expect(mount(<{{name}} />)).toMatchSnapshot();
    });
});
