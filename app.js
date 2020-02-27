let array = 'This is the array need to check space';
let count = 0;
for (i in array) {
    if (array[i] === ' ') {
        count++;
    }
}
alert('So tu co trong chuoi la: '+(count+1));