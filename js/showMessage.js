var button = document.getElementById("answer")
button.addEventListener("click", function(event) {
    var question = document.getElementById("question")
    question.classList.add("hide")

    var message = document.getElementById("img")
    message.classList.add("show")

    button.classList.add("hide")

})