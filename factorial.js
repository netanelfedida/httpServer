function factorial(num){
    let factArr = []
    for(i = num-1;i > 0; i--){
        fact = num*i;
        factArr.push(fact);
        
    }
    return factArr.toString()
}
module.exports = {factorial} 
