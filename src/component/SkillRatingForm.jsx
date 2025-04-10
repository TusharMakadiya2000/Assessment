import React, { useEffect } from "react";

import Icon from "../component/utils/Icon";

const SkillRatingForm = ({
    skills: skillItems,
    register,
    getValues,
    reset,
    errors,
}) => {
    useEffect(() => {
        const defaultValues = skillItems.map(() => ({
            rating: null,
            trajectory: null,
            comments: "",
            recommendations: "",
            na: false,
        }));
        reset({ skills: defaultValues });
    }, [skillItems, reset]);

    const toggleNA = (index) => {
        const values = getValues("skills");
        values[index].na = !values[index].na;
        if (values[index].na) {
            values[index].rating = null;
            values[index].trajectory = null;
            values[index].comments = "";
            values[index].recommendations = "";
        }
        reset({ skills: values });
    };

    const setRating = (index, value) => {
        const values = getValues("skills");
        values[index].rating = value;
        values[index].na = false;
        reset({ skills: values });
    };

    const setTrajectory = (index, value) => {
        const values = getValues("skills");
        values[index].trajectory = value;
        values[index].na = false;
        reset({ skills: values });
    };

    return (
        <div className="space-y-8 overflow-auto h-72 mb-12">
            {skillItems.map((skill, i) => (
                <div
                    key={i}
                    className="bg-[#f8f9fa] px-5 rounded-lg flex flex-col gap-3"
                >
                    <div>
                        <p className="text-xl font-semibold">{skill.title}</p>
                        <p className="text-gray-600 text-sm">{skill.desc}</p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-x-5 gap-y-2 w-full items-start">
                        <div className="col-span-3 flex items-center gap-3">
                            <span className="text-lg">Ratings</span>
                            {errors?.skills?.[i]?.rating && (
                                <div className="flex gap-1 items-center text-red-500 text-sm">
                                    <Icon
                                        icon="information-circle"
                                        className="h-5 w-5"
                                    />
                                    Rating is required
                                </div>
                            )}
                        </div>

                        <div className="col-span-2 flex items-center gap-3">
                            <span className="text-lg">
                                Development Trajectory
                            </span>
                            {errors?.skills?.[i]?.trajectory && (
                                <div className="flex gap-1 items-center text-red-500 text-sm">
                                    <Icon
                                        icon="information-circle"
                                        className="h-5 w-5"
                                    />
                                    Trajectory is required
                                </div>
                            )}
                        </div>

                        <div className="col-span-3 flex justify-start items-center gap-5">
                            <div className="flex flex-col items-start">
                                <button
                                    type="button"
                                    onClick={() => toggleNA(i)}
                                    className={`border border-border-primary cursor-pointer rounded px-3 py-2 ${
                                        getValues(`skills.${i}.na`)
                                            ? "bg-red-400 text-white"
                                            : ""
                                    } ${
                                        !getValues(`skills.${i}.na`)
                                            ? "hover:bg-red-400/50"
                                            : ""
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
                                {Array.from({ length: 10 }).map((_, idx) => {
                                    const ratingValue = idx + 1;
                                    const isSelected =
                                        getValues(`skills.${i}.rating`) ===
                                        ratingValue;
                                    return (
                                        <div
                                            key={idx}
                                            className="flex flex-col items-center w-10"
                                        >
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setRating(i, ratingValue)
                                                }
                                                className={`rounded border cursor-pointer border-border-primary h-10 w-10 ${
                                                    isSelected
                                                        ? "bg-primary-bg text-white"
                                                        : ""
                                                } ${
                                                    !isSelected
                                                        ? "hover:bg-primary-bg/50"
                                                        : ""
                                                }`}
                                            >
                                                {ratingValue}
                                            </button>
                                            <div className="text-xs text-gray-500 h-4 text-center">
                                                {idx === 0
                                                    ? "Rarely"
                                                    : idx === 9
                                                    ? "Always"
                                                    : "\u00A0"}
                                            </div>
                                        </div>
                                    );
                                })}
                                <input
                                    type="hidden"
                                    {...register(`skills.${i}.rating`, {
                                        required: !getValues(`skills.${i}.na`),
                                    })}
                                />
                            </div>
                        </div>

                        <div className="col-span-2">
                            <div className="flex gap-14">
                                {[
                                    {
                                        icon: "chevron-down",
                                        label: "Declining",
                                        value: "down",
                                        selectedColor: "bg-[#ff9e80]",
                                        hoverColor: "hover:bg-[#ffe0db]",
                                    },
                                    {
                                        icon: "minus",
                                        label: "Plateaued",
                                        value: "neutral",
                                        selectedColor: "bg-[#ffde9c]",
                                        hoverColor: "hover:bg-[#fff1d1]",
                                    },
                                    {
                                        icon: "chevron-up",
                                        label: "Improving",
                                        value: "up",
                                        selectedColor: "bg-[#b9f6ca]",
                                        hoverColor: "hover:bg-[#dbffe8]",
                                    },
                                ].map(
                                    ({
                                        icon,
                                        label,
                                        value,
                                        selectedColor,
                                        hoverColor,
                                    }) => {
                                        const isSelected =
                                            getValues(
                                                `skills.${i}.trajectory`
                                            ) === value;
                                        return (
                                            <div
                                                key={value}
                                                className="text-center"
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setTrajectory(i, value)
                                                    }
                                                    className={`w-10 h-10 cursor-pointer border border-border-primary rounded  ${
                                                        isSelected
                                                            ? selectedColor
                                                            : ""
                                                    } 
                        ${!isSelected ? hoverColor : ""}`}
                                                >
                                                    <Icon
                                                        icon={icon}
                                                        className="h-5 w-5"
                                                    />
                                                </button>
                                                <input
                                                    type="hidden"
                                                    {...register(
                                                        `skills.${i}.trajectory`,
                                                        {
                                                            required:
                                                                !getValues(
                                                                    `skills.${i}.na`
                                                                ),
                                                        }
                                                    )}
                                                />
                                                <div className="text-xs text-gray-500">
                                                    {label}
                                                </div>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
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
                                {...register(`skills.${i}.comments`, {
                                    required: !getValues(`skills.${i}.na`),
                                })}
                            />
                            {errors?.skills?.[i]?.comments && (
                                <p className="text-sm text-red-500">
                                    Comments are required
                                </p>
                            )}
                        </div>

                        <div className="col-span-2">
                            <textarea
                                placeholder="Recommendations"
                                className="w-full border border-border-primary rounded p-2 text-sm resize-none"
                                rows={3}
                                {...register(`skills.${i}.recommendations`, {
                                    required: !getValues(`skills.${i}.na`),
                                })}
                            />
                            {errors?.skills?.[i]?.recommendations && (
                                <p className="text-sm text-red-500">
                                    Recommendations are required
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillRatingForm;
