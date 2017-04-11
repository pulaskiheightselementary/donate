import { Component } from 'react';
import { withRouter } from 'react-router';
import ReactGA from 'react-ga';

function logPageView({ location } = window) {
	const page = location.pathname + location.search + location.hash;
	ReactGA.set({ page });
	ReactGA.pageview(page);
}

class ScrollToTop extends Component {
	componentWillMount() {
		logPageView();
	}

	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
			logPageView();
		}
	}

	render() {
		return this.props.children
	}
}

export default withRouter(ScrollToTop);
