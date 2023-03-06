const questions = [
    {
        'que':'The "function" and " var" are known as:',
        'a':'Keywords',
        'b':'Data types',
        'c':'Declaration statements',
        'd':'Prototypes',
        'correct':'c'
    },
    {
        'que':'Javascript is an _______ language?',
        'a':'Object-Oriented',
        'b':'Object-Based',
        'c':'Procedural',
        'd':'None of the above',
        'correct':'a'
    },
    {
        'que':' In JavaScript, what is a block of statement?',
        'a':'Conditional block',
        'b':'block that combines a number of statements into a single compound statement',
        'c':'both conditional block and a single statement',
        'd':'block that contains a single statement',
        'correct':'b'
    },
    {
        'que':'In the JavaScript, which one of the following is not considered as an error:',
        'a':'Syntax error',
        'b':'Missing of semicolons',
        'c':'Division by zero',
        'd':'Prototypes',
        'correct':'c'
    },
    {
        'que':' In JavaScript the x===y statement implies that:',
        'a':'Both x and y are equal in value, type and reference address as well.',
        'b':'Both are x and y are equal in value only.',
        'c':'Both are equal in the value and data type.',
        'd':'Both are not same at all.',
        'correct':'c'
    }
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()       
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index+1}) ${data.que}`
    optionInputs[0].nextElementSibling.innerText = data.a
    optionInputs[1].nextElementSibling.innerText = data.b
    optionInputs[2].nextElementSibling.innerText = data.c
    optionInputs[3].nextElementSibling.innerText = data.d
}

const submitQuiz = () =>{
    const data = questions[index]
    const ans = getAnswer()
    if (ans === data.correct ){
        right++
    }
    else{
        wrong++
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () =>{
    document.getElementById('box').innerHTML = `
        <div style="text-align:center">
        <h3>Thank you for playing the quiz!</h3>
        <h2>${right} / ${total} are correct</h2>
        </div>
    `
} 
loadQuestion();