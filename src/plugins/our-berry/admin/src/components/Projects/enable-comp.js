import React, {useState, useEffect} from 'react';
import { 
    Icon, Pencil
} from '@strapi/design-system';
export default function EnableComp (props) {
    if(props.mode) {

    }
    return (
        <>{props.mode ? <span className='yes-span'>{"Yes"}</span> : <span className='no-span'>{"No"}</span> }</>
    )
}