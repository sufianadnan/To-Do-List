const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask()
{
    if(inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

        li.addEventListener("click", function() {
            li.classList.toggle("checked");
        });

        span.addEventListener("click", function() {
            listContainer.removeChild(li);
        });
        }
        inputBox.value="";
    }
