let number = 1000;
for(let i = 2;i<=number;i++){
    let counts = 0;
    for (let j = 2; j < i;j++){
        if (i%j == 0) {
            counts++;
        }
    }
    if (counts == 0) {
        console.log(i);
    }
}