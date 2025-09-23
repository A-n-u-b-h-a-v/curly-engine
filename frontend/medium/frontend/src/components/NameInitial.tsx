
const NameInitial = ({ size }: { size: number}) => {
    const Initail=(author:string)=>{
        const name = author.split(" ");
        const initials = name.map((n) => n[0]).join("");
        return initials;
      }
  return (
      <div className={`cursor-pointer flex items-center justify-center w-${size} h-${size} bg-gray-300 uppercase rounded-full text-[${2*size}px] font-semibold `}>
      
      {Initail("anubhav")}
      
</div>
    
  )
}

export default NameInitial
