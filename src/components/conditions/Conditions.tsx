import React, { useState } from 'react';
import './conditions.css';
import { ConditionModel } from '../../models/search/Search';

interface ConditionProps {
    data: ConditionModel[]
}

export const Conditions = (props: ConditionProps) => {

    return (
        <>
            <img src={"http://halyk-wiki.cfp.corp.p-s.kz/file-server/" + props.data[0].files[0].full_directory} style={{ maxWidth: '100%' }} />

            <div className="long-description">
                {props.data[0].short_description}
            </div>
        </>

    )
}

