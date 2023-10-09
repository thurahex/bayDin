

const questListBox = document.querySelector("#qList")
const numbers = document.querySelector("#numbers")
const ansResult =document.querySelector("#ansResult")
const resultDiv = document.querySelector("#result")
const okBtn = document.querySelector("#okbtn")
// const quest = document.querySelector("#quest")

// quest.classList.add("text-[20px]")

let questionNumber=0 
let answerNumber =0


numbers.classList.toggle("hidden")

async function getData(){
    const response = await fetch("./Data.json")
    const data = await response.json()


    
    data.questions.forEach((quest,index) => {

        const li = document.createElement("li")
        li.className = "py-2 border-2 px-2 mb-2 border-slate-300 text-[14px]"
        li.innerHTML = quest.questionNo + " . "+quest.questionName
        li.addEventListener("click", () =>{
            window.scrollTo({
                top:0,
                behavior:"smooth"
            })
            var nodeNumber = index +1 
            document.querySelector("#quest").innerHTML = questListBox.childNodes[nodeNumber].innerText
            
            numbers.className="block"

            questionNumber = nodeNumber
            


        })
        questListBox.append(li)

        
        
    });

    let indexList = 0
    
    for(let i = 0; i<= 8; i++){
        const tr = document.createElement("div")
        tr.classList.add("flex","justify-around","font-bold")
        for(let y =0; y<=8; y++){
            
            const td = document.createElement("div")
            td.innerText = data.numberList[indexList++]
            td.className = "lg:px-4 lg:py-4 py-2"

            td.addEventListener("click",() =>{
                const luckNumber = Number(td.innerText)-1
                
                const ans = data.answers.filter((q) =>{
                    return q.questionNo == questionNumber
                })
                resultDiv.className = "backdrop-blur-lg  border-black absolute  h-[400px] max-w-[500px] py-3 lg:px-10 sm:px-3 flex flex-col justify-between items-center px-3 text-green-600 top-0 "
                ansResult.innerText = ans[luckNumber].answerResult

                
            })
            

            tr.append(td)
            numbers.append(tr)
            
            
        }
        const br =document.createElement("hr")
        numbers.append(br)
    }

   

    
    
    
}
getData()
const btn = document.querySelector("#btn")
btn.onclick =() =>{
    numbers.classList.toggle("hidden")
    
}
okBtn.onclick=() =>{
    resultDiv.classList.add("hidden")
}