
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
}, {})
const mainEl = document.querySelectorAll(".documentation")
mainEl.forEach(el=>{observer.observe(el)})