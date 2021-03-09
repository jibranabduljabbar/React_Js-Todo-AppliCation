// FirsT_OpTion_ThroW_By_Input_Feild...!

import React from 'react'
import './App.css'
import ToDoImaGe from './ToDo ImaGes/ToDo.png'
import Delete from './ToDo ImaGes/Delete.png'
import firebase from './Config/firebase.js'
import Edit from './ToDo ImaGes/Edit.png'

class ToDo extends React.Component{
    constructor(){
        super()
        this.state = {
            ToDos: [{title: 'BreaK_FasT...!' , Edit: false},{title: 'FasT_WorK...!',Edit: false},{title: 'FooD_Panda.!', Edit: false}],
            Value: ""
        }
    }

    add = () => {
        const OBJ = { title: this.state.Value }
        // this.state.ToDos.push(OBJ)
        // firebase.database().ref('/').child('todos').push(OBJ)
this.setState({
    // First OpTion Throw By Spread Operators...!
    ToDos: [...this.state.ToDos,OBJ],
    // Second OpTion Throw By Updated Value...!
    // ToDos: this.state.ToDos, 
    Value: ""
})
    }

edit = (Index) => {
 this.state.ToDos[Index].Edit = true
 this.setState({
     ToDos: this.state.ToDos
 })
}   

handleFun = (e,index) => {
     this.state.ToDos[index].title = e.target.value
     this.setState({
         ToDos: this.state.ToDos
     })
}

update = (Index) => {
    this.state.ToDos[Index].Edit = false
    this.setState({
        ToDos: this.state.ToDos
    })
   }   



delete = (Index) => {
   this.state.ToDos.splice(Index,1)
   this.setState({
       ToDos: this.state.ToDos
   })
}

    render(){
        return(
            <div className='div'>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div >
                <div className={"mobile"}>    
<h1 className='head'><img height={50} width={50} style={{marginTop:"-10px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/GNOME_Todo_icon_2019.svg/1200px-GNOME_Todo_icon_2019.svg.png" alt="ToDo"/> ToDo_App <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/GNOME_Todo_icon_2019.svg/1200px-GNOME_Todo_icon_2019.svg.png" height={50} width={50} alt="ToDo"/></h1>
<br/>
<br/>
<input placeholder="Enter Your Value..." className='inp' value={this.state.Value} onChange={(v) => this.setState({Value: v.target.value})} type="text"/>

<img onClick={this.add} className='add' src={ToDoImaGe} height={20} width={20} alt="add"/>
              <br/>  
              <br/>
                <ul className='ul'>
{this.state.ToDos.map((T,I) => {
  return <li className='list' key={I}>
      <b>{T.Edit ? <input placeholder="Enter_Your_Updated_Value...!" className="inputt" type="text" onChange={(e) => this.handleFun(e,I)} /> : T.title}</b> 
      {T.Edit ? 
          <img style={{marginLeft:"40px",borderRadius:"100px"}} height={33} width={33} onClick={() => this.update(I)} src="https://previews.123rf.com/images/faysalfarhan/faysalfarhan1711/faysalfarhan171111898/89207650-update-icon-isolated-on-elegant-green-round-button-abstract-illustration.jpg" alt="update"/>
         : 
         <img onClick={() => this.edit(I)} style={{marginLeft:"80px",borderRadius:"100px"}} height={30} width={30} src={Edit} />
      }
    <img onClick={() => this.delete(I)} style={{marginLeft: "10px",borderRadius:"100px"}} height={30} width={30} src={Delete} />
  </li>
})}
   </ul>
   </div>
   </div>
<br/>
<br/>
<br/>
<br/>
<br/>
            </div>
        )
    }
}

export default ToDo;

// SeConD_OpTion_ThroW_By_PrompT...!

// import React from 'react'
// import './App.css'
// import ToDoImaGe from './ToDo ImaGes/ToDo.png'
// import Delete from './ToDo ImaGes/Delete.png'
// import Edit from './ToDo ImaGes/Edit.png'

// class ToDo extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             ToDos: [],
//             Value: ""
//         }
//     }

//     add = () => {
//         this.state.ToDos.push(this.state.Value)
// this.setState({
//     // First OpTion Throw By Spread Operators...!
//     // ToDos: [...this.state.ToDos,this.state.Value],
//     // Second OpTion Throw By Updated Value...!
//     ToDos: this.state.ToDos, 
//     Value: ""
// })
//     }

// edit = (Index) => {
//    const Edit = prompt('Enter Your Edit Value')
//    this.state.ToDos[Index] = Edit
//    this.setState({
//     ToDos: this.state.ToDos
// })   
// }

// delete = (Index) => {
//    this.state.ToDos.splice(Index,1)
//    this.setState({
//        ToDos: this.state.ToDos
//    })
// }

//     render(){
//         return(
//             <div className='div'>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <div >
//                 <div className={"mobile"}>    
// <h1 className='head'><img height={50} width={50} style={{marginTop:"-10px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/GNOME_Todo_icon_2019.svg/1200px-GNOME_Todo_icon_2019.svg.png" alt="ToDo"/> ToDo_App <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/GNOME_Todo_icon_2019.svg/1200px-GNOME_Todo_icon_2019.svg.png" height={50} width={50} alt="ToDo"/></h1>
// <br/>
// <br/>
// <input placeholder="Enter Your Value..." className='inp' value={this.state.Value} onChange={(v) => this.setState({Value: v.target.value})} type="text"/>

// <img onClick={this.add} className='add' src={ToDoImaGe} height={20} width={20} alt="add"/>
//               <br/>  
//               <br/>
//                 <ul className='ul'>
// {this.state.ToDos.map((T,I) => {
//   return <li className='list' key={I}>
//       <b>{T}</b>
//       <img onClick={() => this.edit(I)} style={{marginLeft:"80px",borderRadius:"100px"}} height={30} width={30} src={Edit} />
//     <img onClick={() => this.delete(I)} style={{marginLeft: "10px",borderRadius:"100px"}} height={30} width={30} src={Delete} />

//   </li>
// })}
//    </ul>
//    </div>
//    </div>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
//             </div>
//         )
//     }
// }

// export default ToDo;

/////////////////////



























