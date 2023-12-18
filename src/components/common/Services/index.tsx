import Image from "next/image";
import { FaBeer } from 'react-icons/fa';

const Services = () => {
  return (

    <main>
        <h1 className="text-center">Best of our Services </h1>
        <p className="text-center">Integer vehicula diam et sollicitudin scelerisque. Vestibulum pellentesque bibendum magna, et bibendum turpis lacinia id. Praesent egestas tincidunt risus.</p>
        <div className="grid  md: grid-cols-2 lg:grid-cols-3 gap-4">
            <div><FaBeer  />
            <p>Marketing one</p>
            <p className="text-[24px]">For marketing professionals research online.</p>
            
            
            </div>
            <div className="inline-block justify-center content-centre">
                <div className="items-center">
                <FaBeer color="green"/>
                </div>
            <p>Marketing one</p>
            <p className="text-[24px]">For marketing professionals research online.</p>
            </div>
            <div><FaBeer  />
            <p>Marketing one</p>
            <p className="text-[24px]">For marketing professionals research online.</p>
            </div>
            <div><FaBeer  />
            <p>Marketing one</p>
            <p className="text-[24px]">For marketing professionals research online.</p>
            </div>
            <div><FaBeer  />
            <p>Marketing one</p>
            <p className="text-[24px]">For marketing professionals research online.</p>
            </div>
            <div><FaBeer  />
            <p>Marketing one</p>
            <p className="text-[24px]">For marketing professionals research online.</p>
            </div>

        </div>
    </main>
    
  
      );
    }
    
    
    
 
export default Services