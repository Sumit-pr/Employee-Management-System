import { useState } from "react"
import api from "../api"

function EmployeeForm() {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [department, setDepartment] = useState("")

const save = async (e) => {

e.preventDefault()

try {

await api.post(
"/employees",
{
name,
email,
department
}
)

alert("Employee Added")

setName("")
setEmail("")
setDepartment("")

window.location.reload()

}
catch (error) {

console.log(error)

alert("Error Saving Employee")

}

}

return (

<form
className="form"
onSubmit={save}
>

<input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>
setName(
e.target.value
)}
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>
setEmail(
e.target.value
)}
/>

<input
type="text"
placeholder="Department"
value={department}
onChange={(e)=>
setDepartment(
e.target.value
)}
/>



<button
className="save-btn"
type="submit"
>
Add Employee
</button>

</form>

)

}

export default EmployeeForm