

export function debounce(func,delay=300){
    let time 
    return function(...arg){
        clearTimeout(time)
        time = setTimeout(()=>{
       func(...arg)
        },delay)
    }
}