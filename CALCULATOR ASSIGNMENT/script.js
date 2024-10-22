function ac() {
    document.getElementById("result").value = ""
}

function show(input) {

    document.getElementById("result").value += input;
}

function deleteLast() {

    const res = document.getElementById("result");
    res.value = res.value.slice(0, -1);

}

function cal() {

     const result = document.querySelector("#result")
    try {

        result.value = eval(result.value)
    } 
    catch {
        
        result.value = 'Error'
    }
}