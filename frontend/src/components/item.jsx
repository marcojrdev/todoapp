import {useState} from 'react'

function Item ({ item, updateDocument, deleteDocument}) {

  const [tempText, setTempText] = useState("")

  return(
    <div className="row">
       <input type="checkbox" checked = {!item.active} onClick = { () => {updateDocument({...item, active: !item.active })} } />
      
        { ((item.edit) || (item.texto === "")) ? (
          <input type="text" 
          placeholder = {item.texto}
          onChange = { (e) => {setTempText(e.target.value)} }
          onBlur = { () => { updateDocument( {...item, texto: tempText, edit:false } )} }
           />
          )
            :
            <span onClick = { () => {updateDocument({...item, edit: true }) } } style = {item.active ? {} : { textDecoration: "line-through" }} >
               { item.texto || item.text } 
            </span>
        }

       <button onClick = { () => { deleteDocument(item) } }> Apagar </button>
    </div>
  )

}

export default Item