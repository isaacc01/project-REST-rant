const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: 'https://cdn.doordash.com/static/img/seo/cuisine_chinesefood_480.png'},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'Surely you are not so old?'],
    max: [new Date().getFullYear(), 'Hey, this year is in the future']
    },
    comments: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Comment' }]
})

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
  }
  
module.exports = mongoose.model('Place', placeSchema)


//Change photo!!!!

// // models/places.js
// let places = [
//     {
//       name: "H-Thai-ML",
//       city: "Seattle",
//       state: "WA",
//       cuisines: "Thai, Pan-Asian",
//       pic: "https://images.unsplash.com/photo-1558199141-391d935676f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
//     },
//     {
//       name: "Coding Cat Cafe",
//       city: "Phoenix",
//       state: "AZ",
//       cuisines: "Coffee, Bakery",
//       pic: "https://images.unsplash.com/photo-1621494268492-d01b98eba7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
//     },
//   ];
  
//   module.exports = places;
