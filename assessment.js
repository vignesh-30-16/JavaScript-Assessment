
// Question-5

// const fitness={
// overall:[],
// mainid:[],
//     tracker(){
//         while(true){
//             let menu=Number(prompt("Enter the 1 to add a value\n Enter the 2 Display thr details\n Enter the 3 to update the details\n Enter the 4 to delete the details  "))
//             if(menu===1){
//                 let name=prompt("Enter your name")
//                 let age=Number(prompt("Enter your age"))
//                 let weight=Number(prompt("Enter your Weight"))
//                 let height=Number(prompt("Enter your Height"))
//                 let bmi= weight / Math.pow( (height/100),2 )
          
//                       if(bmi && name && age>0){
//                           if(bmi<18.5){
//                               console.log("User "+name+ "added successfully with BMI " +bmi+ "Goal: Increase calorie intake and gain weight.");
//                           }
                      
//                            else if(bmi>18.5 && bmi<24.9){
//                           console.log("User " +name+ "added successfully with BMI " +bmi+ " Goal: Maintain your current activity and diet")
//                               }
//                           else{
//                           console.log("User "+name+ "added successfully with BMI " +bmi+ "Goal:Aim to burn more calories through exercise.")
//                           }
                 
//                 }
//                else if(age<0)
//                 {
//                   console.log("Invalid age(must be positive number)");
                  
//                 }
//                 else{
//                   console.log("Invalid name(name should not empty string).");
                  
//                 }
//                 this.overall.push({name,age,weight,height,bmi});
          
              
//           console.log(this.overall);
          
          
//               }
//              else if(menu===2){
//                 for(i=0;i<this.overall.length;i++){
//                     uniqueid=Math.floor(1000+Math.random()*999)
//                   if(this.overall[i].bmi &&this.overall[i].name && this.overall[i].age>0 ){
//                       if(this.overall[i].bmi<18.5){
//                           console.log("ID: "+uniqueid +" | Name: "+this.overall[i].name+ " | Age: "+this.overall[i].age+" | Weight: "+this.overall[i].weight+" | Height: "+this.overall[i].height+" | BMI: "+this.overall[i].bmi+ " Goal:Increase calorie intake and gain weight.");
//                       }
                  
//                        else if(this.overall[i].bmi>18.5 && this.overall[i].bmi<24.9){
//                       console.log("ID: "+uniqueid +" | Name: "+this.overall[i].name+ " | Age: "+this.overall[i].age+" | Weight: "+this.overall[i].weight+" | Height: "+this.overall[i].height+" | BMI: "+this.overall[i].bmi+ " Goal: Maintain your current activity and diet")
//                           }
//                       else{
//                       console.log("ID: "+uniqueid +" | Name: "+this.overall[i].name+ " | Age: "+this.overall[i].age+" | Weight: "+this.overall[i].weight+" | Height: "+this.overall[i].height+" | BMI: "+this.overall[i].bmi+ " Goal: Aim to burn more calories through exercise.")
//                       }
             
//             }
//             }
//                     this.mainid.push({uniqueid})
//               }


//               else if(menu===3){
               
//                while (true){
//                 let chose=Number(prompt("Enter the 6 if you need to update the weight and height\n Enter the 7 if you need update the age"))
//                 if(chose===6)
//                     {
//                         let id=prompt("enter the your ID ")
//                         let updateheight = Number(prompt("Enter your new height"))
//                         let updateweight = Number(prompt("Enter ypur new weight"))
                        
                    
//                             updatebmi=updateweight / Math.pow( (updateheight/100),2 )
//                             // oldname=this.overall.name
//                         if(id==this.maini){
//                             for(a=0;a<this.overall.length;a++){
                               
                                    
//                                     this.overall[a].height=updateheight
//                                     this.overall[a].weight=updateweight
//                                     this.overall[a].bmi=updatebmi
//                                     // this.overall[a].name=oldname


                                
//                             }
                           
                          
//                         } 
//                           console.log("User "+this.mainid+" updated successfully. New BMI:" +updatebmi+". Goal: Aim to burn morecalories through exercise.") 
                      
//                 }
//                  else if(chose==7){
//                     let id=Number(prompt("enter yur ID "))
//                     let upadateage = Number(prompt("Enter your new age"))
//                     if(id===this.mainid){
//                         this.overall.age=upadateage

//                     }
//                     console.log("User "+this.mainid+ "updated successfully. BMI remains unchanged.")
//                 }
//                 else{
//                     break;
//                 }
//                }
            
              
                   
                          
//     }
   
//                 else if (menu === 4) {
//                     let ID = prompt("Enter your ID to delete the details");
                
                    
//                     for (j = 0; j < this.overall.length; j++) {
//                         if (uniqueid == ID) {
//                             this.overall.splice(j, 1); 
//                             console.log("User ID Number " + this.mainid + " deleted successfully!");
                            
                        
//                         }
//                         else{
//                             console.log("User with ID Number " + this.mainid + " not found.");
//                         }
//                     }
                
//                 }

//                     else{
//                         break;
//                     }
// }
// }
   
//     }
    

// fitness.tracker()

// question-1

// let arr=[1,2,3,4,5,6,7,8,9]
// let num=9
// let even=0
// let odd=0
// for(i=0;i<arr.length;i++)
// {
//     if(i%2==0){
//        even+=arr[i]

//     }
//     else {
//         odd+=arr[i]
//     }
    
    
// }
// console.log("Even index positions sum: "+ even)
// console.log("Odd index positions sum: "+odd)

    
// question-2
// let arr=[1, 2, 2, 3, 9, 4, 5, 7,9,2]

// let arr1=[]

// for(i=0;i<arr.length;i++){
       
//         if (!arr1.includes(arr[i])) {
            
//             arr1.push(arr[i]);
//         }
//     }

//     console.log("unique values: "+arr1+". Input array contains duplicate values are removed")


// question-3

//     let str = "aabccbdddc";

//     function Duplicatestring(str){
//     let arr = [];

//     for (let i = 0; i < str.length; i++) {
        
//         if (arr.length > 0 && arr[arr.length - 1] == str[i]) {
//             arr.pop(); 
//         } else {
//             arr.push(str[i]); 
//         }
        
//     }
//     return arr.join('')
// }
// let finial = Duplicatestring(str)
// console.log(finial); 

    



   