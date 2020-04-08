import React, { Component } from 'react'

export default class App extends Component {
   constructor(){
      super()
      this.state = {
         src: './images/cat0.jpeg',
      }
   }

   handleSubmit = (event) => {
      event.preventDefault()
      this.setState({src: `./images/cat${Math.floor(Math.random() * 10)}.jpeg`},() => {
         console.log(this.state.src)
      })
   }

   changeLeft = (event) => {
      event.preventDefault()
      this.setState({src: `./images/cat${this.state.src.split('t')[1].split('.')[0] === '0' 
      ? 9
      :this.state.src.split('t')[1].split('.')[0]-1}.jpeg`})
      console.log(this.state.src)
   }

   changeRight = (event) => {
      event.preventDefault()
      this.setState({src: `./images/cat${(this.state.src.split('t')[1].split('.')[0]) === '9' 
      ? 0
      : Number(this.state.src.split('t')[1].split('.')[0])+1}.jpeg`})
      console.log(this.state.src)
   }
   
   
   render() {
      return (
         <div style={{
				marginTop:'200px', 
				display:'flex', 
				justifyContent:'center', 
				alignItems:'center', 
				flexDirection:'column'}}>
            <form onSubmit={this.handleSubmit} className="ui form">
               <div className="field" style={{
                  display:'flex', 
                  justifyContent:'space-between', 
                  alignItems:'center',
                  }}>
                  <div>
                     <button 
                        href='#' 
                        type='button' 
                        onClick={this.changeLeft} 
                        style={{border:'none'}}>
                        <i className="angle double left icon"></i>
                     </button>
                     <div className="ui input" style={{width:'50px'}}>
                        <input 
                           type="text" 
                           style={{textAlign:'center'}} 
                           value={this.state.src.split('t')[1].split('.')[0]} 
                           readOnly
                           onChange={()=>console.log('You shouldn\'t be able to change it') }
                        />
                     </div>
                     <button 
                        href='#' 
                        type='button' 
                        onClick={this.changeRight}
                        style={{border:'none'}}>
                        <i className="angle double right icon"></i>
                     </button>
                  </div>
                  <button type='submit' className='ui button'>Random</button>
               </div>
               <img src={this.state.src} alt="cat" style={{
                  maxWidth:'500px',
                  maxHeight:'500px'
               }}/>
            </form>
         </div>
      )
   }
}
