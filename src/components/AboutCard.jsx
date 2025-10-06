
const AboutCard = ({ description,imageLink}) => {
  return (
    <div className="max-w-sm  bg-grey-600 rounded-2xl shadow-lg overflow-hidden transform  hover:scale-105 transition-transform duration-500 border-2  hover:border-blue-400 transition duration-500">
  <div className="flex items-center ">
    <img
      className="w-full h-35 object-cover rounded overflow-hidden "
      src={imageLink}
      alt="Your Avatar"
    />
    
  </div>
  <div className="p-6 pt-4">
    <p className="text-white-700">
      {description}
    </p>
    <div className="mt-4 flex space-x-4">
      <a href="https://www.linkedin.com/in/pradeep-nayak-8108a6273/" className="text-blue-500 hover:underline">LinkedIn</a>
      <a href="https://github.com/pardip108" className="text-blue-500 hover:underline">GitHub</a>
      <a href="#" className="text-blue-500 hover:underline">Portfolio</a>
    </div>
  </div>
</div>

  );
}

export default AboutCard;   