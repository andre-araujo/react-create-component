import React from 'react';
import { string } from 'prop-types';

import {
    Title,
} from './styles';

function {{name}} ({
    title,
}) {
    return (
        <Title>{title}</Title>
    );
}

{{name}}.defaultProps = {
    title: "",
};

{{name}}.propTypes = {
    title: string,
};

export default {{name}};
