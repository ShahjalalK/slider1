const textArea = document.querySelector('.textArea')
const count = document.querySelector('.count')

function counter(){   
   const textLenth = textArea.value.length;
   count.innerHTML = `${textLenth}`
}