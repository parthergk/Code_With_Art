const SkillItems = ({skilldata}) => {
  return (
      <div className=" flex border-t rounded-md p-4 flex-wrap gap-10 justify-center">
    {
      skilldata.map((skillitem)=>(
        <div className=" flex flex-col justify-center items-center gap-1" key={skillitem.name}>
          <span>{skillitem.name}</span>
          <img src={skillitem.img} alt="log"/>
        </div>
        
      ))
    }
    </div>
  )
}

export default SkillItems