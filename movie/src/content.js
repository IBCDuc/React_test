import { useEffect, useState } from 'react'


function Component() {

    const course = [
        {
            id: 1,
            content: 'Khoa hoc 1'
        },
        {
            id: 2,
            content: 'Khoa hoc 2'
        },
        {
            id: 3,
            content: 'Khoa hoc 3'
        }
    ]

    const [high, sethigh] = useState(1)
    
    useEffect(() => {
        const handlerComment = ( {detail} ) => {
            console.log(detail)
        }
        
        window.addEventListener(`lession-${high}`, handlerComment )
        return () => {
            window.removeEventListener(`lession-${high}`, handlerComment)
        }
        
    }, [high])
        


    return (
        <div>
            {course.map((id) => (
                <li
                    style={{color: high === id.id ?
                        'red':
                        'black'
                    }}
                    onClick = {() => sethigh(id.id)}
                    key = {id.id}
                >{id.content}</li>
            ))}
        </div>
    )

}   



export default Component