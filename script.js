let ele = document.getElementById("colorSelect");
let btn = document.getElementById("s");

btn.addEventListener("click", function() {

	
    if (ele.value === "Red") {
        document.getElementById("1").remove();
    }
    if (ele.value === "Green") {
        document.getElementById("2").remove();
    }
    if (ele.value === "White") {
        document.getElementById("3").remove();
    }
    if (ele.value === "Black") {
        document.getElementById("4").remove();
	}

	
});