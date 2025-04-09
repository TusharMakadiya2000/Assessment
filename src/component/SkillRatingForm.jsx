import React, {
    useState,
    forwardRef,
    useImperativeHandle,
    useEffect,
    useRef,
} from "react";
import Icon from "../component/utils/Icon";

const SkillRatingForm = forwardRef(({ skills: skillItems }, ref) => {
    const containerRef = useRef(null);

    const [skills, setSkills] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const initialSkillData = skillItems.map(() => ({
            rating: null,
            na: false,
            trajectory: null,
            comments: "",
            recommendations: "",
        }));
        setSkills(initialSkillData);

        const initialErrors = skillItems.map(() => ({
            rating: false,
            trajectory: false,
            comments: false,
            recommendations: false,
        }));
        setErrors(initialErrors);
        if (containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
    }, [skillItems]);

    useImperativeHandle(ref, () => ({
        validate: () => {
            const newErrors = skills.map((skill) => ({
                rating: !skill.na && !skill.rating,
                trajectory: !skill.na && !skill.trajectory,
                comments: !skill.na && skill.comments.trim() === "",
                recommendations:
                    !skill.na && skill.recommendations.trim() === "",
            }));
            const success = newErrors.every(
                (err) =>
                    !err.rating &&
                    !err.trajectory &&
                    !err.comments &&
                    !err.recommendations
            );

            setErrors(newErrors);
            return { success };
        },
    }));

    const handleRatingChange = (index, value) => {
        const updated = [...skills];
        updated[index].rating = value;
        updated[index].na = false;
        setSkills(updated);
    };

    const handleNAChange = (index) => {
        const updated = [...skills];
        updated[index].na = !updated[index].na;
        if (updated[index].na) updated[index].rating = null;
        setSkills(updated);
    };

    const handleTrajectoryChange = (index, value) => {
        const updated = [...skills];
        updated[index].trajectory = value;
        setSkills(updated);
    };

    const handleInput = (index, field, value) => {
        const updated = [...skills];
        updated[index][field] = value;
        setSkills(updated);
    };

    return (
        <div ref={containerRef} className="space-y-8 overflow-auto h-72 mb-12">
            {skills.map((skill, i) => (
                <div
                    key={i}
                    className="bg-[#f8f9fa] px-5 rounded-lg flex flex-col gap-3"
                >
                    <div className="">
                        <p className="text-xl font-semibold">
                            {skillItems[i].title}
                        </p>
                        <p className="text-gray-600 text-sm">
                            {skillItems[i].desc}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-x-5 gap-y-2 w-full items-start">
                        <div className="col-span-3">
                            <span className="text-lg">Ratings</span>
                        </div>

                        <div className="col-span-2">
                            <span className="text-lg">
                                Development Trajectory
                            </span>
                        </div>
                        <div className="col-span-3 flex justify-start items-center gap-5">
                            <div className="flex flex-col items-start">
                                <button
                                    type="button"
                                    onClick={() => handleNAChange(i)}
                                    className={`border border-border-primary cursor-pointer rounded px-3 py-2 ${
                                        skills[i].na ? "bg-red-400" : "bg-white"
                                    }`}
                                >
                                    N/A
                                </button>
                                <div className="text-xs text-gray-500">
                                    Not Observed
                                </div>
                            </div>

                            <div className="border-l-2 border-dashed border-black/80 h-9 mb-3.5" />
                            <div className="flex gap-2 flex-wrap">
                                {Array.from({ length: 10 }, (_, idx) => {
                                    const selected =
                                        skills[i].rating === idx + 1;
                                    return (
                                        <div
                                            key={idx}
                                            className="flex flex-col items-center w-10"
                                        >
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleRatingChange(
                                                        i,
                                                        idx + 1
                                                    )
                                                }
                                                disabled={skills[i].na}
                                                className={`rounded cursor-pointer h-10 w-10 border border-border-primary text-sm ${
                                                    selected
                                                        ? "bg-primary-bg text-white"
                                                        : ""
                                                }`}
                                            >
                                                {idx + 1}
                                            </button>
                                            <div className=" col-span-1 text-xs text-gray-500 h-4 text-center">
                                                {idx === 0
                                                    ? "Rarely"
                                                    : idx === 9
                                                    ? "Always"
                                                    : "\u00A0"}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {errors[i].rating && (
                                <p className="text-sm text-red-500 mt-1">
                                    Rating is required
                                </p>
                            )}
                        </div>
                        <div className="col-span-2">
                            <div className="flex gap-14">
                                {[
                                    {
                                        icon: "chevron-down",
                                        label: "Declining",
                                        value: "down",
                                        selectedColor: "bg-[#ff9e80]",
                                    },
                                    {
                                        icon: "minus",
                                        label: "Plateaued",
                                        value: "neutral",
                                        selectedColor: "bg-[#ffde9c]",
                                    },
                                    {
                                        icon: "chevron-up",
                                        label: "Improving",
                                        value: "up",
                                        selectedColor: "bg-[#b9f6ca]",
                                    },
                                ].map(
                                    ({ icon, label, value, selectedColor }) => {
                                        const isSelected =
                                            skills[i].trajectory === value;
                                        return (
                                            <div
                                                key={value}
                                                className="text-center"
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleTrajectoryChange(
                                                            i,
                                                            value
                                                        )
                                                    }
                                                    className={`w-10 h-10 cursor-pointer flex items-center justify-center border border-border-primary rounded ${
                                                        isSelected &&
                                                        selectedColor
                                                    }`}
                                                >
                                                    <Icon
                                                        icon={icon}
                                                        className="h-5 w-5"
                                                    />
                                                </button>
                                                <div className="text-xs text-gray-500 ">
                                                    {label}
                                                </div>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                            {errors[i].trajectory && (
                                <p className="text-sm text-red-500 mt-1">
                                    Trajectory is required
                                </p>
                            )}
                        </div>

                        <div className="col-span-5">
                            <label className="text-lg">
                                Comments & Recommendations
                            </label>
                        </div>
                        <div className="col-span-3">
                            <textarea
                                placeholder="Comments"
                                className="w-full border border-border-primary rounded p-2 text-sm resize-none"
                                rows={3}
                                value={skills[i].comments}
                                onChange={(e) =>
                                    handleInput(i, "comments", e.target.value)
                                }
                            />
                            {errors[i].comments && (
                                <p className="text-sm text-red-500 mt-1">
                                    Comments are required
                                </p>
                            )}
                        </div>
                        <div className="col-span-2">
                            <textarea
                                placeholder="Recommendations"
                                className="w-full border border-border-primary rounded p-2 text-sm resize-none"
                                rows={3}
                                value={skills[i].recommendations}
                                onChange={(e) =>
                                    handleInput(
                                        i,
                                        "recommendations",
                                        e.target.value
                                    )
                                }
                            />
                            {errors[i].recommendations && (
                                <p className="text-sm text-red-500 mt-1">
                                    Recommendations are required
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
});

export default SkillRatingForm;
