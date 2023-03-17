let button = document.querySelectorAll('.input-button');
let del = document.getElementById('erase');
let clear = document.getElementById('clear');
let display = document.getElementById('input');
let equal = document.getElementById('equal');
let string = '';
let boolequ = false;
// console.log(display);
display.value = string;

Array.from(button).forEach((ele) => {
    ele.addEventListener('click', () => {
        let num = ele.value;
        if (string.length == 0) {
            if ((num == '/') || (num == '*') || (num == '+') || (num == '-')) {
                // console.alert('please enter correctly');
            }
            else {
                string += ele.value;
                display.value = string;
            }
        }
        else {

            if (boolequ == true) {
                if ((num == '/') || (num == '*') || (num == '+') || (num == '-')) {
                    string += ele.value;
                    display.value = string;
                }

                else {
                    string = '';
                    display.value = string;
                    string = num;
                    display.value = string;
                }
                boolequ = false;
            }
            else {
                if ((num == '/') || (num == '*') || (num == '+') || (num == '-')) {
                    let l = string[string.length - 1];
                    console.log(l);
                    if ((l == '/') || (l == '*') || (l == '+') || (l == '-')) {

                    }
                    else {
                        string += ele.value;
                        display.value = string;
                    }
                }

                else {
                    string += ele.value;
                    display.value = string;
                }
            }


        }
    })
})

equal.addEventListener('click', () => {
    let ans = eval(string);
    display.value = ans;
    string = ans.toString();
    ans = '';
    boolequ = true;
})

clear.addEventListener('click', () => {
    string = '';
    display.value = string;
})

del.addEventListener('click', () => {
    let temp = string.slice(0, string.length - 1);
    string = temp;
    display.value = string;
    temp = '';
})