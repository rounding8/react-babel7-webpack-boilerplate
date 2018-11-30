
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
            <h1>Demo #4 ∞ Latest React + Babel 7 + webpack Application 🍽</h1>
        );
    }
}
