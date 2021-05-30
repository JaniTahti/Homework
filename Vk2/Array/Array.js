function array()
{
    const numbers = [1,16,23,82,7]

const smallestNumber = Math.min(...numbers);
const largestNumber = Math.max(...numbers);

document.write("Smallest Value:", smallestNumber); 
document.write("<br>Largest Value:", largestNumber);  
}