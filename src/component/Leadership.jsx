import Button from "./comman/Button";
import SkillRatingForm from "./SkillRatingForm";
import data from "../../db.json";
import { useForm } from "react-hook-form";

function EnterPrisePage({ currentStep, onNext, onBack }) {
    const levelData = data?.Assessment[0]?.levels?.[currentStep];
    const skillsData = data.Assessment[1]?.skills?.[currentStep];

    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            skills: skillsData.map(() => ({
                rating: null,
                na: false,
                trajectory: null,
                comments: "",
                recommendations: "",
            })),
        },
    });

    const onSubmit = (data) => {
        console.log(data);
        onNext();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-5 pb-0">
                <div className="flex flex-col gap-3 bg-white rounded-lg p-5 pb-0">
                    <div className="flex flex-col">
                        <span className="text-2xl font-semibold">
                            {levelData.title}
                        </span>
                        <span className="text-gray-600">{levelData.desc}</span>
                    </div>

                    <SkillRatingForm
                        skills={skillsData}
                        register={register}
                        getValues={getValues}
                        reset={reset}
                        errors={errors}
                    />
                </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full bg-white p-2 px-14 flex justify-between items-center">
                <Button onClick={onBack} type="button" variant="white">
                    Back
                </Button>
                <Button type="submit" variant="primary">
                    Next
                </Button>
            </div>
        </form>
    );
}

export default EnterPrisePage;
