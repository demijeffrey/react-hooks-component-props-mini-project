import React from 'react'
import Article from './Article'

function ArticleList({ posts }) {
    console.log(posts)
    const eachPost = posts.map((post) => {
        console.log(post)
        return <Article title={post.title} date={post.date} preview={post.preview} key={post.id} />
    })
    return (
        <main>
            {eachPost}
        </main>
    )
}

export default ArticleList