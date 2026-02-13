const products = [
  { id: 1, name: "iphone12", price: 25000 },
  { id: 2, name: "iphone13", price: 35000 },
  { id: 3, name: "iphone14", price: 45000 },
  { id: 4, name: "iphone15", price: 55000 },
  { id: 5, name: "iphone16", price: 65000 },
];

//get all products

export const getProducts = (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "Products retrieved successfully", data: products });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Cannot retrieve the products, Error in get products" });
  }
};

//get product by id

export const getProductById = (req,res) => {
  try {
    const productId = req.params.id;
    const productDetail = products.find((ele) => ele.id == productId);
    if(!productDetail){
      return res.status(404).json({message:"Product Not Found"});
    }else{
      return res.status(200).json({message:"Product retrieved successfully", data: productDetail});
    }

  } catch (error) {
    res.status(503).json({message:"Cannot retive the product , Error in get product"});
  }
}