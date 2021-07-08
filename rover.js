class Rover {
  constructor(position){
    this.position=position;
    this.mode='NORMAL';
    this.generatorWatts=110;
  }
  receiveMessage(message){
    let response={
    message :message.name,
    results : [] 
    }
    let roverStatus={
      mode: this.mode ,  
      generatorWatts:this.generatorWatts,
      position:  this.position
    }
   let cmdarray=message.commands;
   
   for(let i=0;i<cmdarray.length;i++)
   {
     //console.log(message.commands[i])
     if(message.commands[i].commandType=='STATUS_CHECK'){

      response.results.push({completed:true,roverStatus:{
      mode: this.mode ,  
      generatorWatts:this.generatorWatts,
      position:  this.position
    }})
      }

      else if (message.commands[i].commandType=='MODE_CHANGE')
          { 
            this.mode=message.commands[i].value;
            response.results.push({completed:true})
          }

        else if(message.commands[i].commandType=='MOVE'){
           if(this.mode=='LOW_POWER')
           {
             response.results.push({completed:false});
             }else{
          
          this.position=message.commands[i].value;
            response.results.push({completed:true})
        }
        }
        //     if(this.mode=='NORMAL'){
             
        // response.results.push({completed:true})
        //     }
        //     else if(this.mode=='LOW_POWER')
        //     {
        //         response.results.push({completed:false});
        //     }
            
   // }
             
      // else if(message.commands[i].commandType=='MODE_CHANGE')
      // {
      //      if(this.mode=='NORMAL')
      //       {
      //          response.results.push({completed:true})
      //       }else if(this.mode=='LOW_POWER')
      //       {
      //           response.results.push({completed:false})
      //       }
              
      // }
   }
  
   //console.log(cmdarray.length);
    //let res=response.results
    //let res1=[]
    //console.log(cmdarray)
  // /*for(let i=0;i<cmdarray.length;i++){
  //   if(commands.commandType='MOVE')
  //   {
  //     response.results.push({completed :true})
  //     return;
  //   }
    // if(message.commands='STATUS_CHECK') {
    //   response.results.push({completed :true},{completed:true,roverStatus })
    //   return;
    // }
  //   if(commands.commandType='MODE_CHANGE	')
    
  //   {
  //   response.results.push({completed :true})
  //   return;
  //   }
  // }*/
    //console.log(res)
    
     
    
     
     
     //console.log(res1)
     //}
    //  if(cmdarray.commandType='STATUS_CHECK') {
    //   response.results.push({completed :true},{completed:true,roverStatus })
    //   return;
    
    // console.log(response.results)
    //  console.log(response.results.length)
    //  console.log(response.message)
     
    return response;
    
     }    
    
     
    

    

    
     // Write code here!
}

module.exports = Rover;