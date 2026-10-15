function generateName() {

    const name = document.getElementById("name").value.trim();
    const direction = document.getElementById("direction").value.trim();
    let code = document.getElementById("code").value.trim();

    if (name === "" || direction === "" || code === "") {
        alert("يرجى تعبئة جميع الحقول");
        return;
    }

    // يجعل الكود ثلاث خانات مثل 001
    code = code.padStart(3, "0");

    document.getElementById("result").innerHTML =
        `<strong>G-${code} | ${name} | ${direction}</strong>`;
}