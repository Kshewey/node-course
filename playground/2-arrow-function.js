// const square = (x) => {
//   return x * x
// }


const square = (x) => x * x
console.log(square(6))

const event = {
  name: 'Cotsen Open',
  guestList: ['me', 'you', 'your mom!'],
  printGuestList() {
    console.log('Guest list for ' + this.name)

    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name)
    })
}
}
event.printGuestList()
