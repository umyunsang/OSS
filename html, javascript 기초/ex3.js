function calculate(op) {
    // html에서 입력한 숫자 2개 가져와서 숫자로 변환 후 num1, num2에 넣음
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    let result = 0;

    // 숫자 아니면 리턴(종료)
    if (isNaN(num1) || isNaN(num2)) {
        alert("두 개 모두 숫자로 입력해 주세요!");
        return;
    }


    switch (op) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '**': result = num1 ** num2; break;
        case 'bigger': 
            if (num1 > num2) result = num1;
            else result = num2;
            break;
        case 'clear': boxclear(); break;
        case '/': if (num2 === 0) {
                alert("0으로 나눌 수 없어요!"); return;
            }
            result = num1 / num2; break;
    }

    // 결과 보여줌
    document.getElementById('result').value = result;
}
function boxclear() {
    document.getElementById('number1').value = "";
    document.getElementById('number2').value = "";
    document.getElementById('result').value = "";
}

