const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: false,
    trim: true,
  },
  price: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  attributes: [
    {
      title: {
        type: String,
        required: false,
        trim: true,
      },
      value: {
        type: String,
        required: false,
        trim: true,
      },
    },
  ],
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
});

productSchema.plugin(toJSON);
productSchema.plugin(paginate);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
