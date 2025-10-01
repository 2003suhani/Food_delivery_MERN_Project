
import userModel from "../models/userModel.js"

// add items to user cart
const addToCart = async (req,res) => {
    try {
        if(!req.body.itemId){
            return res.json({success:false,message:"itemId is required"});
        }
        let userData = await userModel.findById(req.body.userId);
        let cartData = userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Added To Cart"});
    } catch (error) {
        res.json({success:false,message:"Error"});
    }
}

// remove items from user cart
const removeFromCart = async (req,res) => {
    try {
        if(!req.body.itemId){
            return res.json({success:false,message:"itemId is required"});
        }
        let userData = await userModel.findById(req.body.userId);
        let cartData = userData.cartData;
        if (cartData[req.body.itemId]>0) {
            cartData[req.body.itemId]-=1;           
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Removed From Cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
        
    }
}

//fetch user data
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found for this user" });
    }

    res.status(200).json(cart.cartData);  // Safe to access now
  } catch (error) {
    console.error("Error in getCart:", error);
    res.status(500).json({ message: "Server error" });
  }
}

export {addToCart,removeFromCart,getCart}