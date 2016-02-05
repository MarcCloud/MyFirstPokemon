import React from 'react';

const App = React.createClass({
    render (){
        return <section>
                    <header className="ui large header"><h1>Choose your pokemon</h1></header>
                    <div className="ui container">{this.props.children}</div>
                </section>;
    }
});

export default App;
