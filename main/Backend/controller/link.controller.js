import Link from "../models/link.model.js";

const checkUrl = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "Url is required" })
  }

  try {
    let link = await Link.findOne({ url })

    if (link) {
      
      return res
        .status(200)
        .json({ url, result: link.result, checkedAt: link.checkedAt })
    }

    
    const analyzedResult = "Analysis result from ML model"; //  ml logic willl be here

    link = new Link({ url, result: analyzedResult, checkedAt: new Date() })
    await link.save();

    return res
      .status(201)
      .json({ url, result: analyzedResult, checkedAt: link.checkedAt })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" })
  }
}

const getLinkHistory = async (req,res) => {
  try {
    //finfding links from db return by mongodb as array of objects
    const links = await Link.find().select("-_id")
    
    // this will verify that if arr.length = 0 it means it dont have any links to show
    if(!links.length){
      return res.status(400).json({error:"You don't have any link history"})
    }
  
    return res.status(200).json({history:links})
    
  } catch (error) {
    console.log("Unable to fetch history",error)
    return res.status(500).json({error:"intenal server error"})
  }
}

export {
  checkUrl,
  getLinkHistory
}