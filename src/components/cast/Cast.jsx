import React from 'react';
import './castStyle.scss'

const Cast = ({name, born, url, id}) => {

    return (
        <div className='cast_container'>
            <ul className="accordion">
                <li className="accordion-item">
                    <input id={`s${String(id)}`} className="hide" type="checkbox"/>
                    <label htmlFor={`s${String(id)}`} className="accordion-label">{id} :{name}</label>
                    <ul className="accordion-child">
                        <li>
                            <p>Born :{born}</p>
                            Link :
                            <a href={url} target='_blank' rel="noreferrer">{url}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Cast;