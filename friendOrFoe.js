// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

function friend(friends){
    //task: filter an array and return an array of strings of friends names
    // input: array of strings
    // returns: array of strings
    // pseudo:
    // // save the array to a variable
     let newFriends = []
    // // for each name in the array
    //  for (let i=0 ; i <= friends.length; i++){
    //     if(friends[i].length === 4){ // check if the name has 4 letters
    //     // if it does add to new friends array
    //      newFriends.push(friends[i]) 
    //     }
    // }

    
     
        
          





   return friends.filter(str => str.length === 4 )
  }
  console.log(friend(["Ryan", "Kieran", "Mark"]))