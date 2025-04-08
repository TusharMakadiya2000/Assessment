import Header from "../component/Header";
import Button from "../component/Button";
import Icon from "../component/utils/Icon";
import EnterPrise from "../component/EnterPrise";
const steps = [
    "Enterprise Leadership",
    "Team Leadership",
    "Individual Leadership",
];

function Home() {
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
    ];
    console.log("user", users);
    return (
        <div>
            <Header />
            <div className="bg-white flex flex-col gap-5 py-5 px-5">
                <div className="flex justify-between gap-5 items-center">
                    {users.map((user, index) => (
                        <div
                            key={index}
                            className="flex cursor-pointer hover:bg-gray-200 items-center justify-center gap-2 border border-gray-400 rounded-full py-1 px-2"
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
                                    user.status === "away" ? "bg-amber-300" : ""
                                } w-2 h-2 rounded-full`}
                            ></span>
                            <span>{user.name}</span>
                        </div>
                    ))}
                    <div className="flex justify-center items-center cursor-pointer hover:scale-110 duration-300 border border-gray-300 rounded-full">
                        <Icon icon="chevron-up" className="h-7 w-7 rotate-90" />
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex justify-between">
                        <span className="text-2xl text-black">
                            Test Rater Rating Lauren D.
                        </span>
                        <div className="flex gap-2">
                            <Button
                                // className="py-1.5 px-2"
                                type="button"
                                // href="/user"
                                variant="primary"
                            >
                                Save and Close
                            </Button>
                            <Button
                                // className="py-1.5 px-2"
                                type="button"
                                // href="/user"
                                variant="white"
                            >
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
                                                index <= 0
                                                    ? "bg-black"
                                                    : "bg-gray-300"
                                            }`}
                                        />
                                    )}
                                    <div
                                        className={`w-6 h-6 rounded-full p-1 border-2 ${
                                            index <= 0
                                                ? "border-black"
                                                : "border-gray-300"
                                        }`}
                                    >
                                        <div
                                            className={`w-full h-full rounded-full ${
                                                index <= 0
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
            <EnterPrise />
        </div>
    );
}

export default Home;
