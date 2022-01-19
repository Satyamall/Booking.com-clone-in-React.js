import React from 'react'

const HeaderSvg = (props) => {
    return (<svg className={props.styles} height="24" width="24"
                 viewBox="0 0 24 24" role="presentation" aria-hidden="true"
                 focusable="false">
            <path d={props.path}/>
        </svg>)
}

export default HeaderSvg
