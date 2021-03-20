import React from 'react';

import Input, { useInput } from '../Common/Input';

import styles from './index.scss';

function constructNewUserPayload(field, body) {
    switch (field.label) {
        case 'Gender': {
            body.gender = field.value;
            break;
        }
        case 'Title': {
            body.name = {
                ...body.name,
                title: field.value,
            }
            break;
        }
        case 'First name': {
            body.name = {
                ...body.name,
                first: field.value,
            }
            break;
        }
        case 'Last name': {
            body.name = {
                ...body.name,
                last: field.value,
            }
            break;
        }

        case 'Username': {
            body.username =  field.value;
            break;
        }

        case 'Email': {
            body.email =  field.value;
            break;
        }

        case 'Password': {
            body.password =  field.value;
            break;
        }

        case 'DOB': {
            body.dob =  field.value;
            break;
        }

        case 'Phone': {
            body.phone =  field.value;
            break;
        }
        default:
            body[field.label] = field.value;
    }
}

function AddNewUser({ handleAddUser }) {
    const gender = useInput();
    const title = useInput();
    const firstName = useInput();
    const lastName = useInput({ validation: false });
    const email = useInput();
    const userName = useInput();
    const password = useInput({ type: 'password' });
    const dob = useInput({ type: 'date' });
    const phone = useInput({ type: 'number' });

    const fields = [{
        label: 'Gender',
        placeholder: 'Gender',
        ...gender,
    }, {
        label: 'Title',
        placeholder: 'Title',
        ...title,
    }, {
        label: 'First name',
        placeholder: 'First name',
        ...firstName,
    }, {
        label: 'Last name',
        placeholder: 'Last name',
        ...lastName,
    }, {
        label: 'Email',
        placeholder: 'Email',
        ...email,
    }, {
        label: 'Username',
        placeholder: 'Username',
        ...userName,
    }, {
        label: 'Password',
        placeholder: 'Password',
        ...password,
    }, {
        label: 'DOB',
        ...dob,
    }, {
        label: 'Phone',
        placeholder: 'Phone',
        ...phone,
    }]



    function addUser() {
        let isValid = true;
        const body = {

        }
        for(let i = 0; i< fields.length; i++) {
            if(!fields[i].isValid) {
                isValid = false;
                break;
            } else {
                const field = fields[i];
                constructNewUserPayload(field, body)
            }
        }
        if(isValid) {
            handleAddUser({ user: body });
        }
    }

    return (
        <div>
            {fields.map(field => (
                <Input {...field} key={field.label} />
            ))}
            <button onClick={addUser}>Adduser</button>
        </div>
    )
}

export default AddNewUser;
