import React from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {
    state = {
        HeaderText: 'Name Finder',
        headerExpanded: true,
        SuggestedNames: [],
    };

    handleInputChange = (inputText) => {
        {/*console.log('Input text - ', inputText); */ }
        {/* name(inputText);*/ }
        {/*this.setState({ headerExpanded: !(inputText.length > 0) })*/ }
        this.setState({
            headerExpanded: !inputText,
            SuggestedNames: inputText ? name(inputText) : [],
        });

    };

    render() {
        {/*console.log(name('cloud'));*/ }
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    HeadTitle={this.state.HeaderText} />
                <SearchBox onInputChage={this.handleInputChange} />
                <ResultsContainer SuggestedNames={this.state.SuggestedNames} />
            </div>
        );
    }
}
export default App;