import { useEffect, useState } from 'react'


function Component() {

    const [img, setimg] = useState({})


    useState(() => {
        return () => {
            img && URL.revokeObjectURL(img.preview)
        }
    }, [img])
    const handlerFile = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setimg(file)
    }

    return (
        <div>
            <input
                type = 'file'
                onChange= {handlerFile}
            />
            {img && (<img src={img.preview} />)}
            
        </div>
    )

}   



export default Component