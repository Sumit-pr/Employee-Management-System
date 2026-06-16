import { useEffect, useState } from "react"
import api from "../api"

function EmployeeList() {

const [employees, setEmployees] = useState([])

const [editingId, setEditingId] = useState(null)

const [editData, setEditData] = useState({
name:"",
email:"",
department:""
})


useEffect(()=>{

loadEmployees()

},[])


const loadEmployees = async()=>{

try{

const res =
await api.get(
"/employees"
)

setEmployees(
res.data
)

}
catch(err){

console.log(err)

}

}


const deleteEmployee = async(id)=>{

try{

await api.delete(
`/employees/${id}`
)

loadEmployees()

}
catch(err){

console.log(err)

}

}


const startEdit=(emp)=>{

setEditingId(
emp.id
)

setEditData({

name:emp.name,

email:emp.email,

department:emp.department

})

}


const updateEmployee = async(id)=>{

try{

await api.put(

`/employees/${id}`,

editData

)

setEditingId(
null
)

loadEmployees()

}
catch(err){

console.log(err)

}

}


return(

<div>

<h2>Employee List</h2>

{

employees.map(
(emp)=>(

<div
className="employee"
key={emp.id}
>

{

editingId===emp.id

?

<>

<input
value={editData.name}
onChange={(e)=>
setEditData({
...editData,
name:e.target.value
})
}
/>

<input
value={editData.email}
onChange={(e)=>
setEditData({
...editData,
email:e.target.value
})
}
/>

<input
value={editData.department}
onChange={(e)=>
setEditData({
...editData,
department:e.target.value
})
}
/>

<div className="actions">

<button
className="edit"
onClick={()=>
updateEmployee(
emp.id
)
}
>

Update

</button>

<button
className="delete"
onClick={()=>
setEditingId(
null
)
}
>

Cancel

</button>

</div>

</>

:

<>

<h3>{emp.name}</h3>

<p>{emp.email}</p>

<p>{emp.department}</p>

<div className="actions">

<button
className="edit"
onClick={()=>
startEdit(
emp
)
}
>

Edit

</button>

<button
className="delete"
onClick={()=>
deleteEmployee(
emp.id
)
}
>

Delete

</button>

</div>

</>

}

</div>

)

)

}

</div>

)

}

export default EmployeeList