import React from 'react';
import { FaRegFileLines } from "react-icons/fa6";
import { MdDownloadForOffline } from "react-icons/md";
import { RiCloseCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";

function Cards({ data, reference }) {
  return (
    <motion.div  
      drag 
      dragConstraints={reference}
      whileTap={{ scale: 0.9 }}
      dragElastic={0.2}
      className='flex-shrink-0 relative w-[15vw] h-72 bg-red-100 rounded-[50px] overflow-hidden'>
      <div className='px-8 mt-8'>
        <FaRegFileLines />
      </div>
      <p className='font-semibold text-sm px-5 py-5 text-zinc-900 leading-tight'>{data.desc}</p>
      
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center px-8 py-3 justify-between mb-5'>
          <h1 className='font-semibold text-sm text-zinc-900 leading-tight'>{data.filesize}</h1>
          <span>
            {data.close ? <RiCloseCircleFill /> : <MdDownloadForOffline />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`w-full py-2 ${data.tag.tagColor === "blue" ? "bg-blue-800" : "bg-green-800"}`}>
            <h1 className='text-center text-red-100 font-semibold'>{data.tag.tagTitle}</h1>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
