/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  
  var emptyList = {};
  var head = null;
  // var tail = null;

  function getHead(){
      return head;
  }

  function getTail(){
    // currNode will be head since it is set to null
    var currNode = head; 
    // while will create a loop that will run thought the if statements
    while( currNode !== null){
      if( currNode.next    !== null){
        currNode = currNode.next;
      } else {
        return currNode;
      }
    }
    return currNode;
  }

  function add(newValue){
    // will call on the getTail function
    var tail = getTail();
    //var for newNode to be generated in 
    var newNode  = {
      value : newValue,
      next : null
    };
    // says that if the tail is null then the head will have a newNode added to it if not it will add a new node to the tail
    if(tail === null){
      head = newNode;
    } else {
      tail.next = newNode;
    }

    return newNode;
  }

  function get(num){
    //should go through the LL and find a specific node in the index
   var currNode  = head;
   var count = 0; 

    // counting should begin at the head, and intialize it at 0, then if it has currNode.next then it should increment the count by one 
    
    while(currNode !== null){
      if( count !== num){
        count ++;
        currNode = currNode.next;
      } else {
        return currNode;
      }
    }
    return false;
  }

  function remove(num){
    //remove a node from the ll
    var currNode  = head;
    var count = 0;
    
    if( num === 0){
      head = currNode.next;
    }

    while(currNode !== null){
      if( count !== num){
        currNode = currNode.next;
        count ++;
      } else {
        // we can't have a negative # check if we're at the head kill the head and move to the next 
        // currNode = currNode.next;
        var prevNode = get(num-1);
        // var nextNode = get(num+1);
        prevNode.next = currNode.next;
        return;
      }
    }
    return false;


  }



  function insert(value, num){

    var currNode = head; 
    var count = 0;
    
    var newNode = {
      value: value, 
      next : null,
    };

    if(num === 0){ //sets a new node at head if the counter is set to 0
      head = newNode;
    } 

    while( currNode !== null){
      if( count !== num){
        currNode = currNode.next;
        count ++;
      } else {
        var prevNode = get(num-1);
        prevNode.next = newNode; //setting the previous node's next to the new one 
        newNode.next = currNode; //sets the newNode as the currNode
        return;
      }
  }
  return false;
}


  return {
    getHead : getHead,
    getTail : getTail,
    add : add,
    remove : remove,
    get : get,
    insert : insert
  };
}

var  ll = linkedListGenerator();
ll.add("snake");
ll.add("mouse");
ll.add("horse");
ll.add("rooster");
ll.add("dog");
ll.add("shark");
ll.add("cat");
ll.add("bird");
ll.add("fish");
// ll.get(3);

var theHead = ll.getHead();
var theTail = ll.getTail();
// var newItem = ll.add();

console.log("theHead", theHead);
console.log("theTail", theTail);
// console.log("newNode", newItem);


