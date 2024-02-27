import React from 'react';
import './App.css';
import data from './data.json';
import Search from './components/Search';

const App = () => {
    return (
        <div>
            <Search data={data} />
        </div>
    );
};

export default App;
