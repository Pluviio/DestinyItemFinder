import SearchBar from './components/SearchBar/SearchBar';
import React, { useState } from 'react';
import DisplayItemsForm from './components/Home/Items';

const App = () => {

  const [search, setSearch] = useState();

  return (
    <div className='App'>
      {SearchBar ({search, setSearch})}
      <DisplayItemsForm/>
    </div>
  )
};

export default App;