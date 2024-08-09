//  import { Button } from "@/components/ui/button";
// import Image from "next/image";
//  import Link from "next/link";


// export default function Home() {
  
//   return (
//     <div>
      
//       {/* <Button>Subscribe</Button> */}
      
//       <div>
        
//       <Image src={'/home.png'} width={2000} height={2000}
//         className='absolute' />
//         <Link href={'/dashboard'}>
//       <Button className="z-20">Go Dashboard</Button>
//       </Link>

//       </div>
      
      


//     </div>
  
     
      
      
//   );
// }
 



import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-full h-full">
        <Image 
          src={'/home.png'} 
          width={2000} 
          height={2000} 
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="Home Background"
        />

        <div className="absolute top-8 right-8 z-20">
          <Link href={'/dashboard'}>
            <Button className="px-10 py-7 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
