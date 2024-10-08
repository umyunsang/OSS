function changeColor() {
    const co = document.getElementById("co").value;
 
  
    // 입력된 색상을 body의 글자색으로 설정
    document.body.style.backgroundColor = co;
    document.getElementById("co").style.color = co; 
  
    // 입력된 색상이 잘못되었을 경우 팝업창
    if (co == "") {
        alert("색을 입력해 주세요"); return
    }
    else if (!isValidColor(co)) {
      alert(co + "는 존재하지 않는 색입니다. 다시 작성해 주세요 ^^"); return
    }

  }
  
  function isValidColor(color) {
    // 유효한 색상인지 확인
    const st = new Option().style;
    st.color = color;
    return st.color != "";
  }
  