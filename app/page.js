// //  import { Button } from "@/components/ui/button";
// // import Image from "next/image";
// //  import Link from "next/link";


// // export default function Home() {
  
// //   return (
// //     <div>
      
// //       {/* <Button>Subscribe</Button> */}
      
// //       <div>
        
// //       <Image src={'/home.png'} width={2000} height={2000}
// //         className='absolute' />
// //         <Link href={'/dashboard'}>
// //       <Button className="z-20">Go Dashboard</Button>
// //       </Link>

// //       </div>
      
      


// //     </div>
  
     
      
      
// //   );
// // }
 



// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="relative flex items-center justify-center h-screen bg-gray-100">
//       <div className="relative w-full h-full">
//         <Image 
//           src={'/home.png'} 
//           width={2000} 
//           height={2000} 
//           className="absolute inset-0 w-full h-full object-cover z-0"
//           alt="Home Background"
//         />

//         <div className="absolute top-8 right-8 z-20">
//           <Link href={'/dashboard'}>
//             <Button className="px-10 py-7 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg">
//               Go to Dashboard
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }




import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100 overflow-hidden">
      <div className="relative w-full h-full">
        <Image 
          src={'/home.png'} 
          layout="responsive" 
          width={2000} 
          height={2000} 
          objectFit="contain" 
          className="w-full h-auto"
          alt="Home Background"
        />

        <div className="absolute top-0 right-0 transform translate-x-[-10%] translate-y-[10%] z-20 m-6">
          <Link href={'/dashboard'}>
            <Button className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
