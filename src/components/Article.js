import React from 'react'

function Article({ title, date = "January 1, 1970", preview, id }) {
    return <article key={id}>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </article>
}

export default Article