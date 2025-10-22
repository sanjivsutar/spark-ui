// "use client";

// import React from "react";
// import Image from "next/image";

// export default function CpProductDetails() {
//     return(
//         <section className="bg-[url(/assets/images/product-details-bg.png)] bg-cover bg-center h-screen">
//             <div className="relative flex flex-col items-center justify-center gap-6">
//                 <Image src="/assets/icons/dot-with-gradient-color.svg" alt="Product Details" width={28} height={28} className="relative top-4 left-1"/>
//                 <Image src="/assets/icons/dot-with-gradient-color.svg" alt="Product Details" width={28} height={28} className="relative top-20 left-[40%]"/>
//                 <Image src="/assets/icons/dot-with-gradient-color.svg" alt="Product Details" width={28} height={28} className="relative top-75 right-[8%]"/>
//                 <Image src="/assets/icons/dot-with-gradient-color.svg" alt="Product Details" width={28} height={28} className="relative top-75 right-[18%]"/>
//                 <Image src="/assets/icons/dot-with-gradient-color.svg" alt="Product Details" width={28} height={28} className="relative top-78 right-[31%]"/>
//                 <Image src="/assets/icons/dot-with-gradient-color.svg" alt="Product Details" width={28} height={28} className="relative top-82 left-[13%]"/>
//                 <Image src="/assets/icons/dot-with-gradient-color.svg" alt="Product Details" width={28} height={28} className="relative top-106 right-[40%]"/>
//                 <Image src="/assets/icons/dot-with-gradient-color.svg" alt="Product Details" width={28} height={28} className="relative top-22 left-[40%]"/>
//             </div>
//         </section>
//     )
// }



"use client";

import React from "react";
import Image from "next/image";

export default function CpProductDetails() {
    return (
        <section className="relative bg-[url(/assets/images/product-details-bg.png)] bg-cover bg-center h-screen overflow-hidden">
            {/* each dot positioned absolutely */}
            {/* <div className="Group one">
          <Image
        src="/assets/icons/dot-with-gradient-color.svg"
        alt="Dot"
        width={28}
        height={28}
        className="absolute top-[2%] left-[49%]"
      />
      <div className="dot-one">
        <button className="absolute flex flex-col items-center justify-center bg-[#FFFFFF] text-[#EF4225] text-[14px] rounded-[12px] top-[2%] left-[46%] z-10 py-1 px-3">
        <span>Object : Car</span>
        <span>Colour : Grey</span>
      </button>
        <div className="gradient-frame h-[360px] w-[589px]"></div>
      </div>
      </div> */}
            <div className="relative group">
                <Image
                    src="/assets/icons/dot-with-gradient-color.svg"
                    alt="Dot"
                    width={28}
                    height={28}
                    className="absolute top-[2%] left-[49%]"
                />

                <div className="dot-one hidden group-hover:block">
                    <button className="absolute flex flex-col items-center justify-center bg-[#FFFFFF] text-[#EF4225] text-[14px] rounded-[12px] top-[2%] left-[46%] z-10 py-1 px-3">
                        <span>Object : Car</span>
                        <span>Colour : Grey</span>
                    </button>
                    <div className="gradient-frame h-[360px] w-[589px]"></div>
                </div>
            </div>

            <Image
                src="/assets/icons/dot-with-gradient-color.svg"
                alt="Dot"
                width={28}
                height={28}
                className="absolute top-[16%] right-[8%]"
            />
            <Image
                src="/assets/icons/dot-with-gradient-color.svg"
                alt="Dot"
                width={28}
                height={28}
                className="absolute top-[50%] right-[57%]"
            />
            <Image
                src="/assets/icons/dot-with-gradient-color.svg"
                alt="Dot"
                width={28}
                height={28}
                className="absolute top-[57%] right-[68%]"
            />
            <Image
                src="/assets/icons/dot-with-gradient-color.svg"
                alt="Dot"
                width={28}
                height={28}
                className="absolute top-[65%] right-[80%]"
            />
            <Image
                src="/assets/icons/dot-with-gradient-color.svg"
                alt="Dot"
                width={28}
                height={28}
                className="absolute top-[92%] left-[9%]"
            />
            <Image
                src="/assets/icons/dot-with-gradient-color.svg"
                alt="Dot"
                width={28}
                height={28}
                className="absolute top-[73%] right-[36%]"
            />
            <Image
                src="/assets/icons/dot-with-gradient-color.svg"
                alt="Dot"
                width={28}
                height={28}
                className="absolute top-[57%] right-[8%]"
            />
        </section>
    );
}
