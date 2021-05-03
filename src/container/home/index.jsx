
import PropTypes from 'prop-types';
import React     from 'react';

export default class Home extends React.Component {
    static propTypes = {
        app: PropTypes.object.isRequired
    }

    componentDidMount() {
        console.log('=> Home.componentDidMount()');
    }

    render() {
        return (
            <h1>React + Babel + webpack 🍽</h1>
        );
    }
}
