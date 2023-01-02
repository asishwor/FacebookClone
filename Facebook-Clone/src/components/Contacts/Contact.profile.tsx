interface contactPropTypes {
  image: string;
  name: string;
}
const ContactProfile = ({ name, image }: contactPropTypes) => {
  return (
    <div className="flex items-center mt-3">
      <div className="image h-[30px] cursor-pointer w-[30px] rounded-[50%] overflow-hidden">
        <img src={image} alt={name} />
      </div>
      <div className="name ml-1 text-sm cursor-pointer hover:underline hover:underline-offset-1">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default ContactProfile;
