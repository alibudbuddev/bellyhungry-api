export const MerchantOrderList = (merchantId: any) => {
	return [
    { '$match': { 'merchant': merchantId } },
    { '$group': {
        '_id': '$order', 
        'totalPrice': {
          '$sum': '$totalPrice'
        }, 
        'order': {
          '$first': '$order'
        }, 
        'totalQty': {
          '$sum': '$qty'
        }
      }
    },
    { '$lookup': { 'from': 'orders', 'localField': 'order', 'foreignField': '_id', 'as': 'orderDetails' } },
    { '$unwind': {'path': '$orderDetails' } },
    {
      '$project': {
        'totalPrice': 1, 
        'totalQty': 1,
        'order': 1, 
        'orderDetails': {
          'customerDetails': 1
        }
      }
    }
	];
}