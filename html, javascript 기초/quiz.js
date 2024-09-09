function checkAnswers() {
    let score = 0;

    // 사용자가 입력한 값 가져오기
    const a1 = document.getElementById('a1').value.trim();
    const a2 = document.getElementById('a2').value.trim();
    const a3 = document.getElementById('a3').value.trim();
    const a4 = document.getElementById('a4').value.trim();
    const a5 = document.getElementById('a5').value.trim();

    // 채점
    if (a1.toLowerCase() === "cat") score++;
    if (a2.toLowerCase() === "dolphin") score++;
    if (a3.toLowerCase() === "duck") score++;
    if (a4.toLowerCase() === "100") score++;
    if (a5.toLowerCase() === "625") score++;

    // 결과 출력
    document.getElementById('result').textContent = score + "개 맞았습니다.";
    if (score==5)
        document.getElementById('good').textContent = "참 잘했어요!!";
    else if (score==0)
    document.getElementById('good').textContent = "try again";
    else
    document.getElementById('good').textContent = "";
}