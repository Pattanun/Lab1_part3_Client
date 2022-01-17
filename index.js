console.log('w: ')
let stdin = process.openStdin()
let w, h, i=1
stdin.addListener("data",  (num) => {
   // console.log(High.toString().trim())
   console.log('h: ')
   if ( i === 1)
       w = num
   else if ( i === 2 ){
       h = num
       console.log("area: " + w*h)
       stdin.destroy()
   }
   i++
})