import contents from "./contents.json"

        console.log(data)
        document.querySelector("#topic1").innerHTML = data[0].name
        document.querySelector("#subject1").innerHTML = data[0].subject
        document.querySelector("#content1").innerHTML = data[0].content
        document.querySelector("#students1").innerHTML = data[0].students

        document.querySelector("#topic2").innerHTML = data[1].name
        document.querySelector("#subject2").innerHTML = data[1].subject
        document.querySelector("#content2").innerHTML = data[1].content

        document.querySelector("#topic3").innerHTML = data[2].name
        document.querySelector("#subject3").innerHTML = data[2].subject
        document.querySelector("#content3").innerHTML = data[2].content
        document.querySelector("#students3").innerHTML = data[2].students

        document.querySelector("#topic4").innerHTML = data[3].name
        document.querySelector("#subject4").innerHTML = data[3].subject
        document.querySelector("#students4").innerHTML = data[3].students
    })