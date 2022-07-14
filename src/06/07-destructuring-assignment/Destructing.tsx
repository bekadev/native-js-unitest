import React from 'react';
import {ManType} from "./destructing-assignment.test";

type PropsType = {
    title: string
    man: ManType
}

export const Destructing: React.FC<PropsType> = ({title, man}) => {
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
        </div>
    );
};

