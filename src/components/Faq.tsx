'use client' //
import React, { useState } from 'react'

import Gilroy from './Text/Gilroy'
import Arial from "./Text/Arial";

const Faq = () => {

    const accordionData = [
        {
            title: "User Verification ",
            questions: [
                {
                    id: 1,
                    ques: "Why is Aadhaar card verification necessary?",
                    desc: "Verifying with Aadhaar enhances trust and safety, creating a reliable community of buyers and sellers on SellSafe.",
                },
                {
                    id: 2,
                    ques: "How can I trust the verified status of other users?",
                    desc: "Look for the verification badge on user profiles. It indicates that the user's identity has been verified through the Aadhaar card submission process.",
                }
            ],
        },
        {
            title: "AI integration",
            questions: [
                {
                    id: 3,
                    ques: "Can AI accurately identify and categorize various items?",
                    desc: "Yes, SellSafe's AI is designed to recognize and categorize items accurately, ensuring that listings are placed in the right categories and described appropriately.",
                },
                {
                    id: 4,
                    ques: "What additional information can AI provide for a listing?",
                    desc: "AI identifies key details like colors and features, enhancing the quality of listings and helping buyers make informed decisions.",
                }
            ],
        },
        {
            title: "Connecting Buyers and Sellers",
            questions: [
                {
                    id: 5,
                    ques: "Are there any communication tools for buyers and sellers on the platform?",
                    desc: "Yes, SellSafe provides secure messaging within the app, allowing buyers and sellers to communicate and finalize details without sharing personal contact information.",
                },
                {
                    id: 6,
                    ques: "What steps are taken to ensure a safe transaction between buyers and sellers?",
                    desc: "SellSafe prioritizes safety by safeguarding transaction funds. The payment is held securely until the buyer approves the received product, ensuring a secure and satisfactory transaction for both parties.",
                }
            ],
        },
    ]

    const [accnumber, setAccNumber] = useState(1)
    const [accordionOpen, setAccordionOpen] = useState(false);

    const checkAccnumber=(id:number)=>{
             if(accnumber==id){
                setAccNumber(0)
                return
             }
             setAccNumber(id)
    }
    return (
        <div id='faqs' className='mt-10 lg:px-10 px-3 pb-[64px]' >
            <div className="lg:text-[#271E58]  text-[64px] leading-[4rem] lg:leading-normal  font-[500] capitalize lg:p-10 p-4 pl-3 lg:pl-20">
                <Gilroy><p className='lg:w-2/3 w-full'>We are here to help  you. See FAQs</p></Gilroy>
            </div>
            <div>
                {
                    accordionData.map((data, ind) => {
                        return (
                            <div className='  bg-purple-100 bg-opacity-60  rounded-3xl my-5'>
                                <h1 className='text-[#664BFB] text-3xl sm:text-4xl uppercase p-6 lg:pl-20 pl-7 font-[450] '>{data.title}</h1>
                                <div className='pb-5'>
                                    {
                                        data.questions.map((question, index) => {
                                            return (
                                                <>
                                                    <div className="py-3 lg:pl-20 pl-2  pb-0">
                                                        <button
                                                            onClick={() => checkAccnumber(question.id)}
                                                            className="flex justify-between w-full"
                                                        >
                                                            <span className="text-xl w-2/3 lg:w-full pl-5 lg:pl-0 text-left lg:text-2xl font-[500]">
                                                                <Arial>{question.ques}</Arial>
                                                            </span>
                                                            <span className="mr-[10%]">
                                                                {question.id==accnumber ?
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
                                                            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-black text-xl py-2  pb-0 ${question.id==accnumber
                                                                ? "grid-rows-[1fr] opacity-100 w-[90%] lg:w-[80%]"
                                                                : "grid-rows-[0fr] opacity-0"
                                                                }`}
                                                        >
                                                            <div className="overflow-hidden   ml-5 lg:ml-0">
                                                                <Arial>{question.desc}</Arial>
                                                            </div>
                                                        </div>
                                                        {
                                                            question.id%2==1
                                                            ?
                                                            <hr className='w-[90%] lg:w-[90%] tect-[#AFAFAF] h-[1px] border-[0.px] border-[#AFAFAF] my-5' />
                                                            :null
                                                        }
                                                    </div>

                                                </>)
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Faq