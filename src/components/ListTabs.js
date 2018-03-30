import React from 'react';
import DoListTab from './DoListTab';
import DoneListTab from './DoneListTab';
import DeletedListTab from './DeletedListTab';

const ListTabs=(props)=>{

    return(
      <div>
        <DoListTab items={props.items} handleDone={props.handleDone} handleDelete={props.handleDelete}/>
        <DoneListTab doneItems={props.doneItems} handleDelete={props.handleDelete}/>
        <DeletedListTab deletedItems={props.deletedItems}/>
      </div>
    )
  }


export default ListTabs;