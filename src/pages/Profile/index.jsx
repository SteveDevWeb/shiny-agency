import { useParams } from "react-router-dom"


export default function Profile(){
    let idProfile= useParams();
    console.log( idProfile.id)
    return <div>Hello </div>
}