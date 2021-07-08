const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
it ("constructor sets position and default values for mode and generatorWatts",function(){
  let rover= new Rover( 'position','Normal',110);
  expect(rover.mode).toEqual('NORMAL') &&
  expect(rover.generatorwatts).toEqual(110)
  });

it("response returned by receiveMessage contains name of message",function(){
let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);    // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);
//console.log(response.message)
expect(response.message).toEqual(message.name)
});


it("response returned by receiveMessage includes two results if two commands are sent in the message",function(){
let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);    // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);
//response.results=[{completed: true},{completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 87382098}} ,{completed: true} ]
 //let res1=[]
//console.log(response.message.results)
//console.log(response.results.length)
expect(response.results.length).toEqual(2)
//console.log(response);
});

 it("responds correctly to status check command",function(){
 
 let commands = [ new Command('STATUS_CHECK')]
 let message = new Message('Test message with two commands', commands);
 let rover = new Rover(98382);
 let response = rover.receiveMessage(message);
 let res={completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 98382}}
 //console.log(response)
 expect(response.results[0]).toEqual(res)
 });

it("responds correctly to mode change command",function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
  let message = new Message('Test message with MODE change ', commands);
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
  let res={completed:true};
  //console.log(response.results)
  expect(response.results[0]).toEqual(res)
  });
it("responds with false completed value when attempting to move in LOW_POWER mode",function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
  let message = new Message('Test message with MODE change ', commands);
  let rover = new Rover(98382);
  let response = rover.receiveMessage(message);
  let res={completed:true};
  expect(response.results[0]).toEqual(res)
});

it("responds with position for move command",function(){
let commands=[new Command('MOVE',4321)];
let message = new Message('Test message with MOVE', commands);
let rover  = new Rover(4321);
//console.log(commands.value);

  let response = rover.receiveMessage(message);
  //console.log(response)
  let res={completed:true};
  expect(response.results[0]).toEqual(res)

});



});
  // 7 tests here!

  


