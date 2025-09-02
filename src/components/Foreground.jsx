import React,{useRef,useState} from 'react'
import Cards from './Cards'

function Foreground(){
  const ref=useRef(null);
  const data=[
    {
      desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, laudantium nihil! Ab quaerat nobis qui eaque est?",
      filesize:"4mb",
      close:true,
      tag:{ isOpen:true,tagTitle:"DOWNLODE NOW " ,tagColor:"green"}
    },

{
  desc: "New update available for this application. Please download the latest version.",
  filesize: "12mb",
  close: false,
  tag: {
    isOpen: true,
    tagTitle: "UPDATE",
    tagColor: "blue"
  }
},


{
  desc: "Your session has expired due to inactivity. Please log in again.",
  filesize: "0mb",
  close: true,
  tag: {
    isOpen: false,
    tagTitle: "EXPIRED",
    tagColor: "green"
  }
},


{
  desc: "Download the complete archive of our project files.",
  filesize: "200mb",
  close: false,
  tag: {
    isOpen: true,
    tagTitle: "ARCHIVE",
    tagColor: "blue"
  }
},


{
  desc: "A new feature has been released! Read all about it.",
  filesize: "1mb",
  close: true,
  tag: {
    isOpen: true,
    tagTitle: "NEW",
    tagColor: "orange"
  }
}

  ];


  return (
    <div ref={ref} className='fixed z-[3] w-full h-full top-0 left-0 px-20 py-20 flex flex-wrap gap-10 '>
      {data.map((items,index)=>(
        <Cards data={items} reference={ref} />
      ))}

    </div>
  );

}


  

export default Foreground;