//consume an API
//Free or crendentials? - free
//What are the endpoints - look below
//How is the data being sent back - JSON
//How much data is coming back and what does it look like -JSON is just a javascript object that is flattened and turned

$(document).ready(function () {
    const BASEURL = "https://dog.ceo/api";
    let breed = "";
    let images = [];
    let index = 0;

    $("#starterDogImage").attr("src", "./assets/goof-dog.webp");


    $(".breed-option").click(function () {
        breed = $(this).attr("data-breed");
        $("#breedDropdown").text($(this).text());
        $(".dropdown-menu").removeClass("show");
        fetchImages();
    });

    function fetchImages() {
        if (!breed)
            return;

        fetch(`${BASEURL}/breed/${breed}/images/random/10`)
            .then(response => response.json())
            .then(data => {
                images = data.message;
                index = 0;
                updateImage();
            })
            .catch(error => console.error("Error retreivng messages:", error));
    }

    function updateImage() {
        if (images.length > 0) {
            $("#starterDogImage").attr("src", images[index]);
        }
    }

    $("#nextButton").click(function () {
        if (images.length > 0) {
            index = (index + 1) % images.length;
            $("#starterDogImage").attr("src", images[index]);

        }
    });

    $("#prevButton").click(function () {
        if (images.length > 0) {
            index = (index - 1 + images.length) % images.length;
            $("#starterDogImage").attr("src", images[index]);

        }
    });


    $('.dropdown-toggle').dropdown();


    if ($('.dropdown-toggle').length) {
        console.log("Dropdown initialized successfully.");
    } else {
        console.error("Dropdown button not found!");
    }

});


