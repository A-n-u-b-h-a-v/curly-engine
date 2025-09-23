import { Html } from '@react-three/drei';
import React from 'react';

const Loader = () => {
  return (
    <Html fullscreen>
      <div style={overlayStyle} className='flex items-center justify-center'>
<div class="flex flex-row gap-2">
  <div class="w-4 h-4 rounded-full bg-[#afafaf] animate-bounce"></div>
  <div class="w-4 h-4 rounded-full bg-[#afafaf] animate-bounce [animation-delay:-.3s]"></div>
  <div class="w-4 h-4 rounded-full bg-[#afafaf] animate-bounce [animation-delay:-.5s]"></div>
</div>
      </div>
    </Html>
  );
};

const overlayStyle = {
    width:"50vw",
    height:'70vh',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 9999,
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  padding: '40px',
};
export default Loader;
