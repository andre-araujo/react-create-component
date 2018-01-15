import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import {{name}} from './{{name}}';

storiesOf('{{name}}', module)
    .add('with title', withInfo()(() => (
        <{{name}} title="{{name}} title" />
    )));
