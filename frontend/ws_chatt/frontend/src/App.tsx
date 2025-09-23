import {useEffect,useState,useRef} from 'react'
import './App.css'

function App() {
  const [allMessage, setallMessage] = useState(["hi"]);
  const wsRef = useRef<WebSocket | null>(null);
  const sendRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080')
    ws.onmessage=(event)=>{
      setallMessage(m => [...m,event.data])
    }
    wsRef.current=ws
    ws.onopen=()=>{
      ws.send(JSON.stringify({
        type:'join',
        payload:{
          roomID:'red'
        }
      }))
    }
    return () => {
      ws.close()
    }
  }, []);
  console.log(allMessage);

  
  function sendMessage(){
    const message = sendRef.current.value;
    if (message && wsRef.current) {
      wsRef.current.send(JSON.stringify({
        type: 'chat',
        payload: {
          message: message
        }
      }));
    }
    sendRef.current.value = '';
      }
    
  function sendOnEnter(e:any){
    if(e.key==='Enter'){
      sendMessage()
      
    }  
  }

  return (
    <div className="bg-zinc-900 w-full h-screen p-3">
      {/* <div className='flex justify-center items-center gap-6 h-screen '>
      <input type="text" name="" id="" placeholder='Enter RoomId' className='outline-none px-4 text-white font-bold py-2 rounded-lg bg-slate-600 border-2 border-slate-400' />
      <button className='px-7 text-white font-bold py-2 rounded-lg bg-slate-600 border-2 border-slate-600 hover:bg-slate-500 hover:scale-105 cursor-pointer '>Join</button>
      </div>

      
       */}
       <div className='h-[93%] overflow-y-auto no-scrollbar ' >{
         allMessage.map((msg,index)=><div key={index} className='w-fit bg-zinc-300  px-4 py-2 mb-4 rounded-lg '>{msg}</div>)
       }
       </div>
       
       <div  className=' h-[7%] flex ps-4 pe-2 w-full  text-white font-semibold py-2 rounded-lg bg-zinc-800 '>
        <input ref={sendRef}  onKeyDown={sendOnEnter} type="text" name="" id=""className='h-full outline-none w-[95%]' />
       <button onClick={sendMessage} className='flex bg-blue-700  justify-center items-center w-[5%]  rounded-md hover:bg-zinc-700 hover:scale-105 cursor-pointer ' >Send</button></div>
       
    </div>
  )
}

export default App
