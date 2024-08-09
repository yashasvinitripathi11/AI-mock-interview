import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  
  return (
    <div>
      <h2>subscribe</h2>
      {/* <Button>Subscribe</Button> */}
      <Link href={'/dashboard'}>
      <Button>Go Dashboard</Button>
      </Link>


    </div>
  
     
      
      
  );
}
 


