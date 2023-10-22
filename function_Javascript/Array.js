const prompt  = require('prompt-sync')();
arr1 = ["ZahidSir","Zaid","Kafeel","Kaheel","Zubair"]
arr2 = [200000,50000,80000,20000,10000]
var name = prompt("Enter the name of the Employee: ");
for(let i=0; i<arr1.length; i++)
{
    
    if(name.toLowerCase() == arr1[i].toLowerCase())
    {
        if(arr2[i] <= 10000)
        {
            arr2[i] = arr2[i] + 1500;
        }
        else if(arr2[i] > 10000 && arr2[i] <= 20000)
        {
            arr2[i] = arr2[i] + 3000;
        }
        else if(arr2[i] > 20000 && arr2[i] <= 50000)
        {
            arr2[i] = arr2[i] + 6000;
        }
        else if(arr2[i] > 50000 && arr2[i] <= 80000)
        {
            arr2[i] = arr2[i] + 9000;
        }
        //else if(arr2[i] > 80000 && arr2[i] <= 200000)
        else
        {
            arr2[i] = arr2[i] + 15000;    
        } 
        break;       
    }
   
}

console.log(arr2);
