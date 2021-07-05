// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//You don't need to wrap the log in a variable returning the filtered array/object is enough as the condition and return is housed in the anonymous function.

function findMatching (drivers, name){
   return drivers.filter(currantNameInArray => currantNameInArray.toLowerCase() === name.toLowerCase())
        
            //return newArray;
        }

    // findMatching('Bobby') 

    function fuzzyMatch (drivers, str){

            return drivers.filter(currantNameInArray => currantNameInArray[0] === str[0])
            //return fuzzyArray
        }
   
        function matchName (drivers, name){
            return drivers.filter(driver => driver.name === name)

            //filter is returning an array with the requested logic. No need for conditionals or to wrap the logic in it's own array
            

        }