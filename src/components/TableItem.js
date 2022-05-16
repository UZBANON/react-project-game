import React from 'react';
import MyButton from './ui/button/MyButton';

const TableItem = (props) => {
    return (
      
        <div className="border my-2 p-3 d-flex justify-content-between align-items-center">
       <div className='m-3'>
            <b>{props.post.id}.
            <span> {props.post.title}</span>
            </b>
            <p className="lead">{props.post.body}</p>
       </div>
            <p>
            <MyButton onClick={() => props.remove(props.post)} className="btn btn-outline-danger w-100">Delete</MyButton>
            </p>
        </div>
      
    );
};

export default TableItem;