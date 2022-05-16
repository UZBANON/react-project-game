import React from 'react';
import MySelect from './ui/button/select/MySelect';
import MyInput from './ui/button/Input/MyInput';

function FilterAndSearch({filter, setFilter}) {
    return (
        
       <div className="d-flex justify-content-between my-2">
        <MyInput 
        className="form-control w-50"
        placeholder="Search..."
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        />
      <MySelect 
        value={filter.sort}
        onChange={selected => setFilter({...filter, sort: selected})}
        defaultValue = "Sorted by"
        options={[
          {value: "title", name: "Title"},
          {value: "body", name: "Body"}
        ]}
      />
      </div>
     
    );
}

export default FilterAndSearch;