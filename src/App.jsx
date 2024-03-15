import './index.css';
import React, {useState, Component, useEffect} from 'react';


// export default function HelloWorld(){
//     return(
//         <>
//         <div className = 'container'>
//             <h1>Hello World</h1>
//         </div>
//         </>
//     );
// }

// export default function AlertClicked(){
//     return(
//         <button onClick = {()=>{alert('Clicked!')}}>
//             Click
//         </button>
//     )
// }
// function MyButton(props){
//     return(
//     <button onClick = {() => {alert(props.children)}}>
//         {/* {props.children} */}
//         Click
//     </button>)
// }

// export default function AlertButtonChildren(){
//     function MyButton(props){
//         return(
//         <button onClick = {() => {alert(props.children)}}>
//         {/* {props.children} */}
//         Click
//     </button>)
// }
//     return(
//         <>
//             <MyButton>Button 1</MyButton>
//             <MyButton>Button 2</MyButton>
//             <MyButton>Button 3</MyButton>
//         </>
//     )
// }

// export default function StateButtonCount(){
//     const [count, setCount] = useState(0);
//     return (
//     <button onClick = {() => {setCount(count + 1)}}>
//         You've clicked the button {count} times.
//     </button>
//     )
// }

// export default function LearnMappingUL(){
//     const myArray = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
//     const myArrayUL = myArray.map((animal) => <li>{animal}</li>);
//     return(
//         <ul>
//             {myArrayUL}
//         </ul>
//     )
// }

// export default function MoreMappingTricks(){
//     const myArray = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
//     const styles = {
//         display: 'flex',
//         backgroundColor: '#f3b511',
//         width: '250px',
//         height: '50px',
//         padding: '10px',
//         color: 'black',
//         boxShadow: '20px 15px',
//         justifyContent: 'center',
//         textAlign: 'center',
//         alignItems: 'center'
//     }
//     return(
//         <>
//            {
//             myArray.map((animal)=> (
//                 <div key={animal} style={styles}>
//                     {animal}
//                 </div>
//             ))
//            }
//         </>
//     );
// }

// export default class CreateForm extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             firstName: '',
//             lastName: ''
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     };
//     handleChange(event){
//         this.setState({[event.target.name]:event.target.value});
//     }
//     handleSubmit(event) {
//         alert(`Hello ${this.state.firstName} ${this.state.lastName}!`);
//         event.preventDefault();
//     }
//     render(){
//         return(
//             <form onSubmit = {this.handleSubmit}>
//                 <label>
//                     First Name:
//                     <input type='text' value = {this.state.firstName} onChange = {this.handleChange} name='firstName'/>
//                 </label>
//                 <label>
//                     Last Name:
//                     <input type='text' value = {this.state.lastName} onChange = {this.handleChange} name='lastName'/>
//                 </label>
//                 <input type='submit'/>
//             </form>
//         )
//     }
// }

// export default function RenderingJson(){
//     const jsonObject = [ 
//         { id: 1, setup: "What's the best thing about a Boolean?", punchline: "Even if you're wrong, you're only off by a bit" },
//         { id: 2, setup: "Why do programmers wear glasses?", punchline: "Because they need to C#" }
//     ]
//     const styles = {
//         backgroundColor: 'black',
//         // width: '250px',
//         padding: '10px',
//         color: ' #f9d77e',
//         boxShadow: '#f3b511 20px 15px',
//         justifyContent: 'center',
//         textAlign: 'center',
//         alignItems: 'center',
//         marginBottom: '50px'
//     }
//     // const punchline = jsonObject.map(pl => pl.punchline);
//     return(
//         <>
//             {jsonObject.map(joke => (
//                 <div style={styles}>
//                     <h3>{joke.setup}</h3>
//                     <p>`✨✨{joke.punchline}✨✨`</p>
//                 </div>
//             ))}
//         </>
//     )
// }
function MyButton({setMyUsers}){
    return (
      <button onClick={()=> {
            fetch('https://random-data-api.com/api/users/random_user?size=10')
                .then(response => response.json())
                .then(data => setMyUsers(data))
      }}>Click Me</button>
    )
}

export default function FetchingAndRendering(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://random-data-api.com/api/users/random_user?size=10')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, []);  
    
    return (
        <div>
            <MyButton setMyUsers={setUsers} className='fixButton'/>
            {users.map(user =><div className='flip-card'><div className='flip-card-inner'><div className='flip-card-front'>{/*<img src = {user.avatar}/>*/}<h1>{user.first_name} {user.last_name}</h1><p>{user.phone_number}</p><p>{user.email}</p></div><div className='flip-card-back'><h3>{user.date_of_birth}</h3><h3>{user.social_insurance_number}</h3></div></div></div>)}
        </div>
    )
}
// export default function FetchingAndRendering(){
//     return (
//         <div className = 'flip-card'>
//             <div className = 'flip-card-inner'>
//                 <div class = 'flip-card-front'>
//                     <h1>Kariel Mosley</h1>
//                 </div>
//                 <div class = 'flip-card-back'>
//                     <h1>Kariel Mosley</h1>
//                 </div>
//             </div>
//         </div>
//     )
// }