import Header from "../component/comman/Header";
import Button from "../component/comman/Button";
import Icon from "../component/utils/Icon";
import Leadership from "../component/Leadership";
import { useRef, useState } from "react";
const steps = [
    "Enterprise Leadership",
    "Team Leadership",
    "Individual Leadership",
];

function Home() {
    const scrollRef = useRef(null);
    const [currentStep, setCurrentStep] = useState(0);
    const handleNext = () => {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    };
    const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

    const scroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 150,
                behavior: "smooth",
            });
        }
    };

    const users = [
        {
            name: "Darshil Modi",
            status: "online",
        },
        {
            name: "Anamika Mishra",
            status: "offline",
        },
        {
            name: "Tapan Vachani",
            status: "away",
        },
        {
            name: "Yash Patel",
            status: "online",
        },
        {
            name: "Harsh Patel",
            status: "offline",
        },
        {
            name: "Smit Vadhiya",
            status: "online",
        },
        {
            name: "Nikhil Joshi",
            status: "online",
        },
        {
            name: "Akash Raval",
            status: "offline",
        },
        {
            name: "Keyur Patel",
            status: "away",
        },
        {
            name: "Raj Makadiya",
            status: "online",
        },
        {
            name: "Anamika Mishra",
            status: "offline",
        },
        {
            name: "Tapan Vachani",
            status: "away",
        },
        {
            name: "Yash Patel",
            status: "online",
        },
        {
            name: "Anamika Mishra",
            status: "offline",
        },
        {
            name: "Tapan Vachani",
            status: "away",
        },
        {
            name: "Yash Patel",
            status: "online",
        },
        {
            name: "Anamika Mishra",
            status: "offline",
        },
        {
            name: "Tapan Vachani",
            status: "away",
        },
        {
            name: "Yash Patel",
            status: "online",
        },
    ];

    return (
        <div>
            <Header />
            <div className="bg-white flex flex-col gap-4 py-3 px-5">
                <div className="flex">
                    <div
                        ref={scrollRef}
                        className="flex justify-between gap-5 items-center overflow-hidden no-scrollbar scroll-smooth"
                    >
                        {users.map((user, index) => (
                            <div
                                key={index}
                                className="flex whitespace-nowrap cursor-pointer hover:bg-gray-200 items-center justify-center gap-2 border border-border-primary rounded-full py-1 px-2"
                            >
                                <span
                                    className={`${
                                        user.status === "online"
                                            ? "bg-green-500"
                                            : ""
                                    } ${
                                        user.status === "offline"
                                            ? "bg-red-500"
                                            : ""
                                    } ${
                                        user.status === "away"
                                            ? "bg-amber-300"
                                            : ""
                                    } w-2 h-2 rounded-full`}
                                ></span>
                                <span>{user.name}</span>
                            </div>
                        ))}
                    </div>
                    <div
                        onClick={scroll}
                        className="w-14 h-8 flex justify-center items-center cursor-pointer hover:scale-110 duration-300 border border-border-primary rounded-full"
                    >
                        <Icon icon="chevron-up" className="h-4 w-4 rotate-90" />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <span className="text-2xl text-black">
                            Test Rater Rating Lauren D.
                        </span>
                        <div className="flex gap-2">
                            <Button type="button" variant="primary">
                                Save and Close
                            </Button>
                            <Button type="button" variant="white">
                                <Icon
                                    icon="information-circle"
                                    className="h-5 w-5"
                                />
                                Info
                            </Button>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between w-full">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex-1 flex items-center"
                                >
                                    {index !== steps.length && (
                                        <div
                                            className={`flex-1 h-2 rounded ${
                                                index <= currentStep
                                                    ? "bg-black"
                                                    : "bg-gray-300"
                                            }`}
                                        />
                                    )}
                                    <div
                                        className={`w-6 h-6 rounded-full p-1 border-2 ${
                                            index <= currentStep
                                                ? "border-black"
                                                : "border-border-primary"
                                        }`}
                                    >
                                        <div
                                            className={`w-full h-full rounded-full ${
                                                index <= currentStep
                                                    ? "bg-black"
                                                    : "bg-gray-300"
                                            }`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between w-full text-lg text-gray-600 text-center">
                            {steps.map((label, index) => (
                                <div key={index} className="flex-1">
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Leadership
                currentStep={currentStep}
                onNext={handleNext}
                onBack={handleBack}
            />
        </div>
    );
}

export default Home;
