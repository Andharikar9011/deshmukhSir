import { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import Owner from "../../public/DhwalSir.jpeg";
const OwnerDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible 
      open={open} 
      onOpenChange={setOpen} 
      className="w-full bg-background my-16 px-6 py-6
       lg:w-[60vw ] mx-auto"
    >
      {/* ---- Drawer Trigger ---- */}
      <div className="flex justify-center">
        <CollapsibleTrigger asChild>
          <Button 
            variant="secondary"
            className="px-6 py-3 shadow-sm bg-[#e9dfcf] text-[#5a4633] hover:bg-[#d9cbb9] transition-all "
          >
            {open ? "Hide Owner" : "Meet the Owner"}
          </Button>
        </CollapsibleTrigger>
      </div>

      {/* ---- Drawer Content ---- */}
      <CollapsibleContent
        className="
          data-[state=open]:animate-slide-down 
          data-[state=closed]:animate-slide-up
          overflow-hidden 
        "
      >
        <div className="mt-10 p-8 bg-[#f5efe6] w-[80vw] mx-auto border border-[#e0d7c8] shadow-inner ">

          <div className="flex w-[60vw] h-auto gap-8 mx-auto flex-col md:flex-row md:grid md:grid-cols-3 items-center">
            
            {/* Image Section */}
            <div className="md:col-span-1 w-[30vh] mx-auto md:mx-0">
              <div className="aspect-square overflow-hidden rounded-full shadow-md">
                <img
                  src={Owner} // replace with correct path
                  alt="Studio Owner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="md:col-span-2 space-y-4 mx-auto md:mx-0">
              <h3 className="font-display text-4xl font-bold text-[#5a4633] text-center lg:text-left">
                Dhawal Deshmukh
              </h3>
              <div className="w-64 lg:w-80 h-1 bg-[#c4a98b]" />

              <p className="font-body text-lg text-justify  text-[#5a4633] leading-relaxed">
                With nearly two decades of experience, Dhawal brings a grounded, context-sensitive approach to architectural design. His work harmonizes sustainability with pragmatic innovation, creating structures that respond intuitively to the local climate.


              </p>

              <p className="font-body text-lg text-justify  text-[#5a4633] leading-relaxed">
                He believes that impactful design is found in the balance—merging creative vision with available resources to honor both the environment and the practical realities of the project.
              </p>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default OwnerDrawer;
