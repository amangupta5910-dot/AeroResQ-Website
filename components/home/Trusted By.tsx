export default function Trusted() {

const companies=[
"MSME",
"Startup India",
"StartinUp India",
"iDEX",
"DRDO",
"IIT",
"NIDHI"
]

return(

<section className="bg-[#050816] py-20">

<div className="max-w-7xl mx-auto px-6">

<h3 className="text-center text-gray-400 uppercase tracking-[5px] mb-10">

Trusted Ecosystem

</h3>

<div className="grid grid-cols-2 md:grid-cols-6 gap-6">

{companies.map((item,index)=>(

<div

key={index}

className="border border-white/10 rounded-2xl py-8 bg-white/5 text-center font-semibold text-white hover:border-orange-500 transition"

>

{item}

</div>

))}

</div>

</div>

</section>

)

}