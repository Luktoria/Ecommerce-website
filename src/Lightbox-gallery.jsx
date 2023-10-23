import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';


function LightBox(props){


    return (
        <>
        <FsLightbox
            toggler={props.toggler}
            sources={props.sources}
        />
    </>

    )
}

export default LightBox;