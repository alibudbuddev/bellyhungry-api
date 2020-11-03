export const MerchantOrderDetails = (orderId: any, merchant: any) => {
  return [
    { '$match': {'_id': orderId } },
    {
      '$lookup': {
        'from': 'orderitems', 
        'let': {'order': '$_id', 'merchant': merchant },
        'pipeline': [
          {
            '$match': {
              '$expr': {
                '$and': [
                  { '$eq': ['$order', '$$order'] },
                  { '$eq': ['$merchant', '$$merchant'] }
                ]
              }
            },
          },
          { '$lookup': {
              'from': 'products', 
              'localField': 'product', 
              'foreignField': '_id', 
              'as': 'productDetails'
            }
          },
          { '$unwind': {
              'path': '$productDetails'
            }
          }
        ], 
        'as': 'items'
      }
    },
    { '$project': {
        'discount': 1, 
        'shippingFee': 1, 
        'customerDetails': 1, 
        'createdAt': 1, 
        'items': {
          'totalPrice': 1, 
          'qty': 1, 
          'price': 1, 
          'productDetails': {
            'name': 1
          }
        }
      }
    },
    {
    '$addFields': {
        'totalPrice': {
          '$sum': '$items.totalPrice'
        }
      }
    }
  ];
}