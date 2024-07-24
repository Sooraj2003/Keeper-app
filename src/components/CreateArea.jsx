import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom'

function CreateArea(props) {
  const [bool,setBool]=useState(false);
  const [note,setNote]=useState({
    title:"",
    content:""
  })
  function handleTitle(event){
   const {name,value}=event.target;
       setNote(prevNote=> {
        return {
          ...prevNote,
          [name]:value
        }

        })
       }
       function handleSubmit(event){
        event.preventDefault();
        props.onAdd(note);
        setNote({
          title: "",
          content: ""
          });
       }
       function handleClick(){
        setBool(true);
       }
  
  return (
    <div>
      <form className="create-note" >
      {bool&&<input onChange={handleTitle} value={note.title} name="title" placeholder="Title" />}
        <textarea onClick={handleClick} onChange={handleTitle} value={note.content} name="content" placeholder="Take a note..." rows={bool?3:1} />
        <Zoom in={bool}><Fab onClick={handleSubmit}>< AddIcon/></Fab></Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
