import './Hello.css';


export default function Hello({fname,lname,age=20}){
    return (<>
    <h1>Hello World {fname}{lname}{age} </h1>
    </>
    );
}