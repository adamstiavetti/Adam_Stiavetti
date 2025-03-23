const ageInput = document.getElementById("age");
const phoneInput = document.getElementById("phone");
const descriptionInput = document.getElementById("description")

ageInput.addEventListener("blur", () => {
    const age = parseInt(ageInput.value, 10);
    if(isNaN(age) || age < 21 || age > 99) {
        alert("Age must be between 21 and 99!!");
        ageInput.value = "";
    }
});
phoneInput.addEventListener("blur", () => {
    let phone = phoneInput.value;
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must follow the 123-456-7890 format.");
        phoneInput.focus();
    }
});

const counter = document.createElement("small")
counter.classList.add("form-text", "text-muted");
counter.style.marginTop = "5px";
counter.textContent = "30 characters remaining";

descriptionInput.parentElement.appendChild(counter);

descriptionInput.addEventListener("input", () => {
    let text = descriptionInput.value;
    if (text.length > 30) {
        descriptionInput.value = text.substring(0, 30);
    }
    counter.textContent = `${30 - descriptionInput.value.length} characters remaining`;
});

