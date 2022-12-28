const data = [
  {
    id: +Math.random() * 100,
    categoryname: "winter clothes",
    items: "Jackets , gloves , etc",
    description: "clothes for cold",
    size: "many sizes",
    createdat: null,
  },
];

const createcategory = (req, res) => {
  const category = req.body.category;
  const items = req.body.items;
  const des = req.body.des;
  const size = req.body.size;

  if (category?.length == "")
    return res.send({
      sucess: false,
      meg: "please name the category",
      data: [],
    });
  if (items?.length == "")
    return res.send({
      sucess: false,
      meg: "please name the items",
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
      items,
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
};

const getallcategory = (req, res) => {
  const allcategory = data.filter((category) => category.createdat == null);

  return res.send({
    success: true,
    msg: "you get all category",
    data: allcategory.map((category) => {
      return { data: category.data };
    }),
  });
};

module.exports = {
  createcategory,
  getallcategory,
};
