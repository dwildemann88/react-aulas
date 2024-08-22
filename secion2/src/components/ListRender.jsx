import {useState} from 'react'

export const ListRender = () => {
    const [list] = useState(["Matheus","Pedro","Josias"])
  return (
    <div>
        <ul>
            {list.map((item)=> <li>{item}</li>)}
        </ul>
    </div>
  )
}
