const Space = (object) => {
  const brArray = new Array(object.number).fill(undefined);
  return (
    <div>
      {brArray.map((_, index) => (
        <br key={index} />
      ))}
    </div>
  );
};

export default Space;
