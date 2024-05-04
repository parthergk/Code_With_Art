const SkillName = ({ logo, text,}) => (
    <>
    <img src={logo} alt={text} className=" w-8"/>
    <span>{text}</span>
    </>
);

export default SkillName;
