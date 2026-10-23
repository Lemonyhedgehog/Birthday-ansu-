document.getElementById("first")
        .addEventListener("click", function() {
            document.getElementById("letter")
                .style.display = "block";
        });
document.getElementById("memoriesbtn")
    .addEventListener("click", function() {
        document.getElementById("memories")
            .classList.toggle("hidden");
    });
