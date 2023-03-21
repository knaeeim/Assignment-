

function multiplicationTable(num){ 
    for(let i=1; i<=10; i++){
        const product= num * i;
        console.log(`${num} * ${i}` + "=" + `${product}`)
    }
}

// This a way of getting result of this function
multiplicationTable(5);
multiplicationTable(10);


// another way of getting result 

let result = multiplicationTable(15); 
console.log(result);

