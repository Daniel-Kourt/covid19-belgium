const TotalBox = ({title , color, isPercentage, numberOne, numberTwo}) => {

  return (
    <div className={`total-box text-${color}`}>

        <p className="mb-2 uppercase">
          {title}
        </p>

        <p className="text-3xl">
          {numberOne}
        </p>

        <p> persons</p>

        <p className="mt-2 text-xl">
            {numberTwo}
            { isPercentage ? "%" : null }
        </p>
        
        <p>
            { isPercentage ? "of the population" : "in last week"}
        </p>
      
    </div>
  );
};

export default TotalBox;
