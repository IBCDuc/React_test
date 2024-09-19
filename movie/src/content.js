import { useEffect, useState } from 'react'


function Component() {
    const [post, getpost] = useState([])
    const [style, getstyle] = useState('posts')
        const content = [
            'posts',
            'comments',
            'albums'
        ]
    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/${style}`)
            .then(res => res.json())
            .then(item => {
                getpost(item)
            })
    }, [style])
   

    return (
        <div>
            <input></input>
            {content.map((item) => {
                return (
                    <button
                        key = {item}
                        onClick={() => {
                            getstyle(item)
                            
                        }}
                        style= {style === item ? {
                            color: '#fff',
                            backgroundColor: '#333'
                        }: {}}
                    >{item}</button>
            )})}
            <ul>
                {post.map( (pro) => {
                    return (
                        <li key = {pro.title}>{pro.body || pro.title}</li>
                    )
                })}
            </ul>
        </div>
    )

}   



export default Component