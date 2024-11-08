function checkAnswers() {
    let score = 0;

    // 사용자가 입력한 값 가져오기
    // arr은 string 아니고 input 객체들의 배열
    const arr = document.getElementsByClassName('answers');

    for(let i=0; i<arr.length; i++){
        if(arr[i].value.trim() == ""){
            alert(i+1 + "번째 답을 적어주세요");
            return 0;
        }
    }

    // 채점
    if (arr[0].value.trim() == "cat") score++;
    if (arr[1].value.trim() == "dolphin") score++;
    if (arr[2].value.trim() == "duck") score++;
    if (arr[3].value.trim() == "100") score++;
    if (arr[4].value.trim() == "625") score++;

    // 결과 출력
    document.getElementById('result').textContent = score + "개 맞았습니다.";

    if (score==5)
    document.getElementById('good').textContent = "참 잘했어요!!";
    else if (score==0)
    document.getElementById('good').textContent = "try again";
    else
    document.getElementById('good').textContent = "";
}