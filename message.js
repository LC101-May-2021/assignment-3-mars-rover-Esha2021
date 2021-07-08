//const Command = require('../command.js');

class Message {
  constructor(name,commands){
  this.name=name;
  if(!name){
    throw Error("Message name required.")
  }
  this.commands=commands
  }
  
   // Write code here!
}
//let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')]
//let message=new Message('New message!',commands);
module.exports = Message;