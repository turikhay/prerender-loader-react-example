import React, {Component} from 'react';

class LandingPage extends Component {
    render() {
        return (
            <div>
                I'm a landing page!
                {
                    // Ensure we're not in prerender mode
                    // and print out the current URL
                    // Note: This triggers React warning (see LandingPageApp)
                    !window.PRERENDER &&
                    [
                        <br/>,
                        'URL: ' + window.location.toString()
                    ]
                }
            </div>
        );
    }
}

export default LandingPage;