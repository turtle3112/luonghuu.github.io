function thayDoiNoiDung(button) {
    var div = document.getElementById("divContent");
    if (button === 1) {
      div.innerHTML = "HTML (HyperText Markup Language) là một ngôn ngữ đánh dấu siêu văn bản được sử dụng để tạo ra các trang web. HTML cho phép thiết kế và cấu trúc nội dung của trang web bằng cách sử dụng các thẻ và các thuộc tính. Các thẻ HTML được sử dụng để định dạng và hiển thị nội dung trên trang web, bao gồm tiêu đề, đoạn văn bản, hình ảnh, liên kết, bảng, biểu đồ, video và âm thanh.";
      div.style.color = "white";
      div.style.fontSize = "20px";
    } else if (button === 2) {
      div.innerHTML = "CSS (Cascading Style Sheets) là một ngôn ngữ đánh dấu được sử dụng để định dạng và trang trí các phần tử trên trang web. CSS cho phép bạn thay đổi màu sắc, kích thước, kiểu chữ và vị trí của các phần tử trên trang web. Nó là một phần quan trọng của công nghệ web và thường được sử dụng cùng với HTML để tạo ra các trang web đẹp và tương tác.";
      div.style.color = "white";
      div.style.fontSize = "20px";
    } else if (button === 3) {
      div.innerHTML = "JavaScript (JS) là một ngôn ngữ lập trình phía client được sử dụng phổ biến trong phát triển web. Nó cho phép tương tác và thay đổi nội dung của trang web một cách động, làm cho trang web trở nên sống động và tương tác với người dùng.";
      div.style.color = "white";
      div.style.fontSize = "20px";
    } else if (button === 4) {
      alert("Chuyển tới trang liên hệ");
      window.location.href = "in4.html";
    } else if (button === 5) {
      alert("Chuyển tới trang gửi câu hỏi")
      window.location.href = "submit.html";
    }
  }
 