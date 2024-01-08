'use client' //
import React, { useState } from 'react'
import AccordionItem from './atoms/AccordionItem'
import Gilroy from './Text/Gilroy'

const Faq = () => {

    const accordionData = [
        {
            title: "Account Management",
            questions: [
                {
                    ques: "Technical Issue(s) Troubleshooting - App?",
                    desc: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
                },
                {
                    ques: "How to create an account on Sell Safe?",
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                }
            ],
        },
        {
            title: "Posting & Managing Ads",
            questions: [
                {
                    ques: "How can I post an ad?",
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                },
                {
                    ques: "How many ads can I post in a month?",
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                }
            ],
        },
        {
            title: "Buying via SELLSAFE",
            questions: [
                {
                    ques: "How do I search for a product?",
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                },
                {
                    ques: "How do I search for an ad based on location?",
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                }
            ],
        },
        {
            title: "making Safe Transactions",
            questions: [
                {
                    ques: "Why is my account banned?",
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                },
                {
                    ques: "How can I hide my phone number?",
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                }
            ],
        },
        {
            title: "Verified User",
            questions: [
                {
                    ques: "What does verified user mean?",
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                },
                {
                    ques: "Why should I trust a verified user/seller?",
                    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                }
            ],
        },
    ]

    return (
        <div className='mt-10 lg:px-10 px-3' >
            <div className="text-[#271E58]  text-[54px] sm:text-6xl font-[650] capitalize lg:p-10 p-4 pl-3 lg:pl-20">
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