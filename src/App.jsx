import './index.css';
import React, {useState, Component, useEffect} from 'react';


// export default function AlertClicked(){
//     return(
//         <button className = 'button' onClick = {()=>{alert('Clicked!')}}>
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
//         <button className = 'button' onClick = {() => {alert(props.children)}}>
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
//     <button className = 'button' onClick = {() => {setCount(count + 1)}}>
//         You've clicked the button {count} times.
//     </button>
//     )
// }

// export default function LearnMappingUL(){
//     const myArray = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
//     const styles = {
//         display: 'flex',
//         backgroundColor: '#f3b511',
//         width: '250px',
//         height: 'fit-content',
//         padding: '10px',
//         color: 'black',
//         boxShadow: '20px 15px',
//         marginBottom: '40px'
//     }
//     return(
//         <div style = {styles}>
//             <ul>
//             {myArray.map((animal) => <li>{animal}</li>)}
//             </ul>
//         </div>
//     )
// }

// function MoreMappingTricksProps({animals}){
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
//         alignItems: 'center',
//         marginBottom: '40px'
//     }
//     return(
        
//         animals.map(animal => <div style={styles} key = {animal}><h2>{animal}</h2></div>
//     ));
// }

// export default function MoreMappingTricksRendering(){
//     const myArray = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
//     return (
//         <div><MoreMappingTricksProps animals={myArray}/></div>
//     )
// }
// function MoreMappingTricksProps1(){
//     const myArray = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
//     let props = myArray;
//     return(
//         <MoreMappingTricks props/>,
//         console.log({props})
//     )
// }
// export default function MoreMappingTricks({props}){
//     // console.log(props)
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
//     const newArray = props.map(prop => <li>{prop}</li>)
    // console.log(newArray)
    // return(
    //     <div style = {styles}>
    //         <ul>
    //             {props.map(prop=>
    //                 <li>{prop}</li>
    //             )}
    //         </ul>
    //     </div>
    // );
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
//                 <input type='submit' value='Greet Me!' className = 'button'/>
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
//         color: ' #ffffbf',
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
//                     <h3 key = {joke.id}>{joke.setup}</h3>
//                     <p>`✨✨{joke.punchline}✨✨`</p>
//                 </div>
//             ))}
//         </>
//     )
// }
function MyButton({setMyUsers, setMyCount, count}){
    return (
      <button className = 'button1' onClick={()=> {
            setMyCount(count + 1);
            fetch('https://random-data-api.com/api/users/random_user?size=10')
                .then(response => response.json())
                .then(data => setMyUsers(data))
      }}>Click Me</button>
    )
}

export default function FetchingAndRendering(){
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(1);
    useEffect(() => {
        fetch('https://random-data-api.com/api/users/random_user?size=10')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, []);  
    
    return (
        <div>
            <MyButton setMyUsers={setUsers} setMyCount = {setCount} count = {count}/>
            <p className = 'p1'>Times Rendered: {count}</p>
            {users.map(user => 
                <div className='flip-card'>
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img src = {user.avatar}/>
                        </div>
                        <div className='flip-card-back'>
                            <h1>{user.first_name} {user.last_name}</h1>
                            <h3>{user.date_of_birth}</h3>
                            <h3>{user.social_insurance_number}</h3>
                            <p>{user.phone_number}</p>
                            <p>{user.email}</p>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}
//----------------------Practicing the flip css
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