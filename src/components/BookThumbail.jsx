function BookThumbail({ title, author, link }) {
  return (
    <a href={`${link}`}>
      <div className="flex flex-col w-60 h-72 border gap-2 rounded">
        <div className=" bg-green-200 w-full h-4/5 "></div>
        <div className="">{title}</div>
        <div className="text-sm ">{author}</div>
      </div>
    </a>
  );
}

export default BookThumbail;
