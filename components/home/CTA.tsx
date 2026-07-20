"use client";

import { motion } from "framer-motion";

export default function CTA(){

return(

<section className="bg-[#07111f] py-28">

<div className="max-w-5xl mx-auto px-6">

<motion.div

initial={{opacity:0,y:50}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.6}}

viewport={{once:true}}

className="rounded-[40px] border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-blue-500/10 p-16 text-center"

>

<h2 className="text-5xl font-bold">

Ready to Transform

<span className="text-orange-500">

 Search & Rescue?

</span>

</h2>

<p className="text-gray-300 mt-8 text-lg leading-8">

Join AeroResQ in building next-generation AI-powered
autonomous drone solutions for defence,
disaster response and national security.

</p>

<div className="mt-12 flex flex-wrap justify-center gap-5">

<button className="bg-orange-500 px-8 py-4 rounded-xl hover:bg-orange-600 duration-300">

Request Demo

</button>

<button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black duration-300">

Contact Us

</button>

</div>

</motion.div>

</div>

</section>

)

}