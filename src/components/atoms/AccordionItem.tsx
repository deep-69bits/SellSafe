import React, { useState } from "react";
import Arial from "../Text/Arial";

const AccordionItem = ({ ques, desc }: { ques: string, desc: string }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-3 lg:pl-20 pl-2  pb-0">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between w-full"
            >
                <span className="text-xl w-2/3 lg:w-full pl-5 lg:pl-0 text-left lg:text-2xl font-[500]">
                    <Arial>{ques}</Arial>
                </span>
                <span className="mr-[10%]">
                    {accordionOpen ?
                        <svg className="h-8 w-8 text-black " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                        :
                        <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    }
                </span>
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-black text-xl py-2  pb-0 ${accordionOpen
                    ? "grid-rows-[1fr] opacity-100 w-[90%] lg:w-[80%]"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden   ml-5 lg:ml-0">
                    <Arial>{desc}</Arial>
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;