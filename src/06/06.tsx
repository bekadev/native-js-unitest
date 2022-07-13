import React from 'react';

export const User = () => {

    const deleteUser = () => {
        alert('delete')
    }

    const saveUser = () => {
        alert('save')
    }

    const nameChanged = () => {
        console.log('name changed')
    }

    const FocusLost = () => {
        console.log('onBlur')
    }


    return (
        <div>
            <textarea onChange={nameChanged} onBlur={FocusLost}></textarea>
            <input onBlur={FocusLost}/>
            beka <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    );
};

