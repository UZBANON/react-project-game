import React from 'react';



function MyModal(props) {
    return (
        <>
   <button type="button" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add Post
        </button>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Creating post</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                {props.children}
            </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default MyModal;