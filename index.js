var exist = [];
document.getElementById("enter").addEventListener("click", function () {
    var v = parseInt(document.getElementById("subj").value);
    var err = document.getElementById("s_error");
    if (isNaN(v) || v <= 0) {
        err.innerHTML = "Enter a valid Number!!";
        return;
    }
    err.innerHTML = "";
    document.getElementById("subj").value = "";
    document.querySelector(".container").innerHTML = "";
    document.querySelector(".res").innerHTML = "";
    document.querySelector(".err").innerHTML = "";
    createContent(v);
});
function createContent(v) {
    for (let i = 0; i < v; i++) {
        let subjectContainer = document.createElement("div");
        subjectContainer.id = `subjectContainer${i + 1}`;
        document.querySelector(".container").appendChild(subjectContainer);

        let label = document.createElement("label");
        label.htmlFor = `Subject${i + 1}`;
        label.textContent = `Subject Name:`;
        subjectContainer.appendChild(label);

        let inputSub = document.createElement("input");
        inputSub.type = "text";
        inputSub.id = `Sub${i + 1}`;
        inputSub.name = `Sub${i + 1}`;
        subjectContainer.appendChild(inputSub);

        let creditLabel = document.createElement("label");
        creditLabel.htmlFor = `credit${i + 1}`;
        creditLabel.textContent = `Credit `;
        subjectContainer.appendChild(creditLabel);

        let input = document.createElement("input");
        input.type = "Number";
        input.min = 0;
        input.max = 4;
        input.id = `credit${i + 1}`;
        input.name = `credit${i + 1}`;
        subjectContainer.appendChild(input);

        let gradeLabel = document.createElement("label");
        gradeLabel.htmlFor = `grade${i + 1}`;
        gradeLabel.textContent = `Grade `;
        subjectContainer.appendChild(gradeLabel);

        let drop = document.createElement("select");
        drop.id = `grade${i + 1}`;
        drop.name = `grade${i + 1}`;

        let gradeArray = ["O", "A+", "A", "B+", "B", "C"];

        for (let j = 0; j < gradeArray.length; j++) {
            let option = document.createElement("option");
            option.value = gradeArray[j];
            option.textContent = gradeArray[j];
            drop.appendChild(option);
        }
        subjectContainer.appendChild(drop);

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-subject");
        deleteBtn.addEventListener("click", function () {
            document.getElementById(`subjectContainer${i + 1}`).remove();
        });
        subjectContainer.appendChild(deleteBtn);
        subjectContainer.appendChild(document.createElement("br"));
        subjectContainer.appendChild(document.createElement("br"));
    }
    let button = document.createElement("button");
    button.textContent = `Result`;
    button.id = `calculate`;
    document.querySelector(".container").appendChild(button);

    button.addEventListener("click", function () {
        printResult();
    });
}
function printResult() {
    let totalcredit = 0;
    let totalpoint = 0;
    let subjects = document.querySelectorAll(".container > div");
    if (subjects.length === 0) {
        document.querySelector(".err").innerHTML = "No subjects to calculate GPA!";
        return;
    }
    for (let subject of subjects) {
        let credit = parseInt(subject.querySelector("input[type='Number']").value);
        let grade = subject.querySelector("select").value;
        if (isNaN(credit) || grade === "") {
            document.querySelector(".err").innerHTML = "Enter a valid grade and credit!!";
            return;
        }
        totalcredit += credit;
        let point = 0;
        switch (grade) {
            case "O":
            point = 10;
            break;
            case "A+":
            point = 9;
            break;
            case "A":
            point = 8;
            break;
            case "B+":
            point = 7;
            break;
            case "B":
            point = 6;
            break;
            case "C":
            point = 5;
            break;
        }
        totalpoint += point * credit;
    }
    document.querySelector(".err").innerHTML = "";
    document.querySelector(".res").innerHTML = "GPA: " + (totalpoint /totalcredit).toFixed(2).toString();
}
    document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("subj").value = "";
    document.querySelector(".container").innerHTML = "";
    document.querySelector(".res").innerHTML = "";
    document.querySelector(".err").innerHTML = "";
    document.querySelector("#s_error").innerHTML = "";
});