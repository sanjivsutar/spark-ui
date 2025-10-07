"use client";

import Image from "next/image";
import React from "react";

const ChatbotDrawer = ({ open, handleClose }) => {
    if (!open) return null;

    return (
        <div className="fixed top-0 right-0 max-w-[40%] h-full shadow-xl z-50 flex flex-col bg-black bg-[url('/assets/images/revanuchartBgImage.png')] ">
            {/* Header */}
            <div className="flex justify-between items-start p-4 border-b flex-shrink-0 border-b border-b-white/20">
                <div className="flex flex-col gap-1">
                    <h2 className="text-m text-[#EEEEF1] font-bold">Spark AI Insights</h2>
                    <p className="text-sm text-[#CECED6]">
                        Interact with your AI companion and talk to your data...
                    </p>
                </div>
                <button
                    onClick={handleClose}
                    className="text-gray-600 hover:text-black"
                >
                    <Image
                        src="/assets/images/close.png"
                        alt="Close Icon"
                        width={14}
                        height={14}
                    />
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Welcome Box */}
                <div className="flex flex-row justify-between items-center border-[#EC3228] rounded-xl border spark-shadow p-6">
                    <div className="flex-col text-start">
                        <div className="text-[#FFFFFF] text-lg font-bold mb-1">Hello Meha!</div>
                        <div className="text-[#CECED6] text-sm">
                            Got questions about the data? We've got the answers!
                        </div>
                    </div>
                    <Image
                        src="/assets/images/spark-start-image.png"
                        alt="Chatbot Illustration"
                        width={60}
                        height={60}
                    />
                </div>

                <div className="flex flex-col gap-4">
                    {/* Bot message */}
                    <div className="text-white max-w-[80%] min-w-[70%] flex flex-row items-center py-2 px-6 rounded-xl border border-white/10 gap-2 bg-gradient-to-b from-[rgba(151, 151, 151, 0.12)] to-[rgba(35, 35, 35, 0.4)]">
                        <Image
                            src="/assets/icons/Shape.svg"
                            alt="Bot Icon"
                            width={14}
                            height={14}
                            className="invert brightness-0"
                        />
                        <span className="text-sm font-semibold">Hi, how can I help you?</span>
                    </div>

                    {/* User message (aligned right automatically) */}
                    <div className="flex justify-end">
                        <div className="text-white max-w-[80%] min-w-[70%] flex flex-row items-center py-2 px-6 rounded-xl border border-white/10 gap-2 bg-gradient-to-b from-[rgba(151, 151, 151, 0.12)] to-[rgba(35, 35, 35, 0.4)]">
                            <div className="w-5 h-5 -ml-2 flex items-center justify-center rounded-full bg-black text-white border border-white text-[8px] font-bold">
                                NB
                            </div>

                            <span className="text-sm font-semibold">
                                What is my Last year growth?
                            </span>
                        </div>
                    </div>
                </div>

                {/* Suggestions */}
                <div className="text-white max-w-[80%] flex flex-col py-6 px-4 rounded-xl border border-white/10 gap-2 bg-gradient-to-b from-[rgba(151, 151, 151, 0.12)] to-[rgba(35, 35, 35, 0.4)]">
                    <div className="flex flex-row items-start gap-2 mb-6">
                        <Image
                            src="/assets/icons/Shape.svg"
                            alt="Bot Icon"
                            width={14}
                            height={14}
                            className="invert brightness-0"
                        />
                        <div className="text-sm text-white font-semibold">
                            Not sure what to ask? Here are some suggestions or type in your
                            own question.
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-6">
                        <ul className="text-sm text-white grid grid-cols-2 gap-y-6 gap-x-3">
                            <li className="p-[1px] rounded-xl bg-gradient-to-r from-[#FF9B3F] to-[#DC2F23]">
                                <div className="rounded-xl bg-black">
                                    <div className="py-1 px-10 rounded-xl bg-gradient-to-b from-[rgba(151,151,151,0.12)] to-[rgba(35,35,35,0.4)] text-white">
                                        Lorem Ipsum
                                    </div>
                                </div>
                            </li>
                            <li className="p-[1px] rounded-xl bg-gradient-to-r from-[#FF9B3F] to-[#DC2F23]">
                                <div className="rounded-xl bg-black">
                                    <div className="py-1 px-10 rounded-xl bg-gradient-to-b from-[rgba(151,151,151,0.12)] to-[rgba(35,35,35,0.4)] text-white">
                                        Lorem Ipsum
                                    </div>
                                </div>
                            </li><li className="p-[1px] rounded-xl bg-gradient-to-r from-[#FF9B3F] to-[#DC2F23]">
                                <div className="rounded-xl bg-black">
                                    <div className="py-1 px-10 rounded-xl bg-gradient-to-b from-[rgba(151,151,151,0.12)] to-[rgba(35,35,35,0.4)] text-white">
                                        Lorem Ipsum
                                    </div>
                                </div>
                            </li><li className="p-[1px] rounded-xl bg-gradient-to-r from-[#FF9B3F] to-[#DC2F23]">
                                <div className="rounded-xl bg-black">
                                    <div className="py-1 px-10 rounded-xl bg-gradient-to-b from-[rgba(151,151,151,0.12)] to-[rgba(35,35,35,0.4)] text-white">
                                        Lorem Ipsum
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <button className="self-end">
                            <Image
                                src="/assets/icons/Duplicate.svg"
                                alt="Duplicate Icon"
                                width={14}
                                height={14}
                                className="invert brightness-0"
                            />
                        </button>
                    </div>
                </div>

                {/* Typing indicator */}
                <div className="flex items-center gap-[2px] justify-center py-3 h-[38px] px-5 border max-w-[14%] border-white/10 rounded-xl bg-gradient-to-b from-[rgba(151, 151, 151, 0.12)] to-[rgba(35, 35, 35, 0.4)]">
                    <span className="w-2 h-2 rounded-full dot bg-red-orange-gradient"></span>
                    <span className="w-2 h-2 rounded-full dot bg-red-orange-gradient"></span>
                    <span className="w-2 h-2 rounded-full dot bg-red-orange-gradient"></span>
                </div>
            </div>

            <div className="flex flex-col max-w-[90%] self-center items-center gap-3 py-15 px-6 border border-[#EC3228] spark-shadow rounded-xl">
                <div className="w-12 h-12 rounded-full bg-red-orange-gradient flex justify-center items-center">
                    <Image
                        src="/assets/icons/timer-icon.svg"
                        alt="Close"
                        width={14}
                        height={14}
                        className="invert brightness-0"
                    />
                </div>
                <div className="text-[18px] text-white font-bold">Our AI chatbot is coming soon — stay tuned!</div>
            </div>
            {/* Sticky Input */}
            <div className="sticky bottom-0 text-white flex gap-2 p-4 flex-shrink-0">
                <input
                    type="text"
                    placeholder="What is my Last year growth?"
                    className="flex-1 px-3 py-2 border border-white/10 rounded-md text-white bg-gradient-to-b from-[rgba(151, 151, 151, 0.12)] to-[rgba(35, 35, 35, 0.4)]"
                />
                <button className="w-12 h-12 border border-[#EC3228] bg-red-orange-gradient rounded-full flex justify-center items-center">
                    <Image
                        src="/assets/icons/right-arrow.svg"
                        alt="Send Icon"
                        width={16}
                        height={16}
                        className="invert brightness-0"
                    />
                </button>
            </div>
        </div>
    );
};

export default ChatbotDrawer;
