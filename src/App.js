import { useState } from "react"

export default function App() {
  const [value,setValue]=useState('');
  
  function deleteNUm(){
    setValue('')
  }
  return (
   <div className="container flex justify-center items-center h-screen">
     <div className="calculator">
      <form action="">
        <div className="">
           <input type="text" value={value} className="border w-[340px] h-[60px] bg-indigo-500 rounded-lg p-4 text-end text-2xl font-bold"/>
           </div>
        <div> 
          <input type="text" value="AC" onClick={(e)=> setValue('')} className=" caret-transparent border w-[80px] p-2  text-center mt-2 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl font-bold  cursor-pointer"/>
          <input type="text" value="DE" onClick={(e)=>setValue(value.slice(0, -1))} className="caret-transparent border w-[80px] p-2 text-center  mt-2 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl font-bold cursor-pointer "/>
          <input type="text" value="." onClick={(e)=>setValue(value+e.target.value)} className="border w-[80px] p-2 text-center  mt-2 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl font-bold cursor-pointer caret-transparent"/>
          <input type="text" value="/" onClick={(e)=>setValue(value+e.target.value)} className="border w-[80px] p-2 text-center  mt-2 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl font-bold cursor-pointer caret-transparent"/>
        </div>
        <div> 
        <input type="text" value="7" onClick={(e)=>setValue(value+e.target.value)} className="border w-[80px] p-2  text-center  mt-2 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-2xl font-bold cursor-pointer caret-transparent"/>
          <input type="text" value="8" onClick={(e)=>setValue(value+e.target.value)} className="border w-[80px] p-2 text-center  mt-2 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-2xl font-bold cursor-pointer caret-transparent"/>
          <input type="text" value="9" onClick={(e)=>setValue(value+e.target.value)} className="border w-[80px] p-2 text-center mt-2 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-2xl font-bold cursor-pointer caret-transparent"/>
          <input type="text" value="*" onClick={(e)=>setValue(value+e.target.value)} className="border w-[80px] p-2 text-center mt-2 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl font-bold cursor-pointer caret-transparent"/>
        </div>
        <div> 
        <input type="text" value="4" onClick={(e)=>setValue(value+e.target.value)} className="border w-[80px] p-2 text-center mt-2 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl font-bold cursor-pointer caret-transparent"/>
          <input type="text" value="5" onClick={(e)=>setValue(value+e.target.value)} className="border w-[80px] p-2 text-center mt-2 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl font-bold cursor-pointer caret-transparent"/>
          <input type="text" value="6" onClick={(e)=>setValue(value+e.target.value)} className="border w-[80px] p-2 text-center mt-2 mr-2  rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl font-bold cursor-pointer caret-transparent"/>
          <input type="text" value="+" onClick={(e)=>setValue(value+e.target.value)} className="border w-[80px] p-2 text-center mt-2 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl font-bold cursor-pointer caret-transparent"/>
        </div>
        <div>
        <input type="text" value="1" onClick={(e)=>setValue(value+e.target.value)} className="border w-[80px] p-2 text-center mt-2 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl  font-bold cursor-pointer caret-transparent"/>
          <input type="text" value="2" onClick={(e)=>setValue(value+e.target.value)} className="border w-[80px] p-2 text-center mt-2 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl font-bold cursor-pointer caret-transparent"/>
          <input type="text" value="3" onClick={(e)=>setValue(value+e.target.value)} className="border w-[80px] p-2 text-center mt-2 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl font-bold cursor-pointer caret-transparent"/>
          <input type="text" value="-" onClick={(e)=>setValue(value+e.target.value)} className="border w-[80px] p-2 text-center mt-2 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl font-bold cursor-pointer caret-transparent"/> </div>
        <div> 
        <input type="text" value="00" onClick={(e)=>setValue(value+e.target.value)} className="border w-[80px] p-2 text-center mt-2 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl font-bold cursor-pointer caret-transparent"/>
          <input type="text" value="0" onClick={(e)=>setValue(value+e.target.value)} className="border w-[80px] p-2 text-center mt-2 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl font-bold cursor-pointer caret-transparent"/>
          <input type="text" value="=" onClick={(e)=>setValue(eval(value))} className="border w-[168px] p-2  text-center mt-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl font-bold cursor-pointer caret-transparent"/>
          
        </div>

      </form>
     </div>
   </div>
  )
}