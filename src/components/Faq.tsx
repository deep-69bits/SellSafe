'use client' //
import React, { useState } from 'react'
import AccordionItem from './atoms/AccordionItem'
import Gilroy from './Text/Gilroy'

const Faq = () => {

    const accordionData = [
        {
            title: "User Verification ",
            questions: [
                {
                    ques: "Why is Aadhaar card verification necessary?",
                    desc: "Verifying with Aadhaar enhances trust and safety, creating a reliable community of buyers and sellers on SellSafe.",
                },
                {
                    ques: "How can I trust the verified status of other users?",
                    desc: "Look for the verification badge on user profiles. It indicates that the user's identity has been verified through the Aadhaar card submission process.",
                }
            ],
        },
        {
            title: "AI integration",
            questions: [
                {
                    ques: "Can AI accurately identify and categorize various items?",
                    desc: "Yes, SellSafe's AI is designed to recognize and categorize items accurately, ensuring that listings are placed in the right categories and described appropriately.",
                },
                {
                    ques: "What additional information can AI provide for a listing?",
                    desc: "AI identifies key details like colors and features, enhancing the quality of listings and helping buyers make informed decisions.",
                }
            ],
        },
        {
            title: "Connecting Buyers and Sellers",
            questions: [
                {
                    ques: "Are there any communication tools for buyers and sellers on the platform?",
                    desc: "Yes, SellSafe provides secure messaging within the app, allowing buyers and sellers to communicate and finalize details without sharing personal contact information.",
                },
                {
                    ques: "What steps are taken to ensure a safe transaction between buyers and sellers?",
                    desc: "SellSafe prioritizes safety by safeguarding transaction funds. The payment is held securely until the buyer approves the received product, ensuring a secure and satisfactory transaction for both parties.",
                }
            ],
        },
    ]

    return (
        <div id='faqs' className='mt-10 lg:px-10 px-3' >
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
                                                    <AccordionItem
                                                        ques={question.ques}
                                                        desc={question.desc}
                                                    />
                                                    {
                                                        (index != data.questions.length - 1) ?
                                                            <hr className='w-[85%] h-[2px] ml-10 sm:ml-20 bg-[#AFAFAF] mt-3 mb-1'></hr>
                                                            :
                                                            <span></span>
                                                    }

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