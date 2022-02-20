const getColorForResultBox = (result: number)=>{
  switch (result){
    case 2:
      return 'black';
    case 1:
      return 'white';
    default:
      return 'grey';
  }
};

export default getColorForResultBox;
