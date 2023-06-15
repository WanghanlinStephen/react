import DownIcon from '../assets/down.png';
import {useState} from "react";

export default function Collapse({title, children}) {
  const [expand, setExpand] = useState(true);

  return (
    <div>
      <h4 onClick={() => {
        setExpand(!expand)
      }} style={{cursor: 'pointer'}}>
        <img
          style={{
            transition: '0.2s',
            transform: `rotate(${ !expand ? '180deg' : '0deg' })`
          }}
          src={DownIcon} width={15}/> {title}
      </h4>
      <div
        style={{
          overflow: 'hidden',
          transition: '0.2s',
          height: expand ? 'auto' : '0px'
        }}
        >
        {children}
      </div>
    </div>
  )
}