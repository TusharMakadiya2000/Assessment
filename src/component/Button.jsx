// function Button({ children }) {
//     const variant = {
//         primary:
//             "p-2 px-3 border border-primary shadow-sm hover:shadow text-white bg-[#27578c]",
//         outline:
//             "p-2 px-3 border border-white shadow-sm hover:shadow text-black bg-white",
//     };
//     console.log("variant", variant);
//     return (
//         <>
//             <button>{children}</button>
//         </>
//     );
// }
// export default Button;

import React from "react";

const variants = {
    primary:
        "py-1 px-3 hover:shadow-lg hover:shadow-black/20 text-white bg-[#27578c]",
    white: "py-1 px-3 border border-gray-300 hover:shadow-lg hover:shadow-black/15 text-black bg-white",
};

const Button = ({
    children,
    onClick,
    disabled,
    data_html,
    type,
    data_tip,
    className,
    variant,
    ...rest
}) => {
    console.log("rest", rest);
    return (
        <>
            <button
                type={type || "button"}
                data-tip={data_tip}
                data-html={data_html}
                onClick={() => {
                    onClick && onClick();
                }}
                disabled={disabled}
                className={`flex items-center justify-center gap-1 rounded cursor-pointer whitespace-nowrap ${
                    variant && variants[variant]
                } ${className}`}
            >
                {children}
            </button>
        </>
    );
};

export default Button;
