"use client"
export default function StudentList({params}){
    return(
        <div>
            <h1>Student List</h1>
            <h3>Name : {params.student}</h3>
        </div>
    )
}