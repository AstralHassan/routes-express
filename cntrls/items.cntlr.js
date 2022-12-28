const data = [
    {
      id: +Math.random() * 100,
      itemname: "Jacket",
      des: "very good jacket it will keep u warm",
      size: "s",
      itemprice: "100$",
      categoryname: "winter clothes",
      createdat: null,
    },
  ];



const createitem = (req , res) => {

 
        const itemname = req.body.itemname;
        const des = req.body.des;
        const itemprice = req.body.itemprice
        const size = req.body.size;
      
        if (itemname?.length == "")
          return res.send({
            sucess: false,
            meg: "please name the itemname",
            data: [],
          });
        if (itemprice?.length == "")
          return res.send({
            sucess: false,
            meg: "please name the itemprice",
            data: [],
          });
        if (des?.length < 15)
          return res.send({
            sucess: false,
            meg: "min des is 15",
            data: [],
          });
        if (size?.length > 3)
          return res.send({
            sucess: false,
            meg: "max size is xxl",
            data: [],
          });
      
        while (true) {
          data.push({
            id: uniqeId,
            category,
            itemname,
            des,
            size,
          });
          break;
        }
        return res.send({
          sucess: true,
          meg: "",
          data: data[data.length - 1],
        });
  
}

const getallitem = (req , res) => {

 
  
}

const deleteitem = (req , res) => {

 
  
}

const getsingleitem = (req , res) => {

 
  
}

const update = (req , res) => {

 
  
}




module.exports = {
    createitem,
    getallitem,
    getsingleitem,
    update,
    deleteitem
}