import React from "react";

const variants = {
    primary:
        "py-1 px-3 hover:shadow-lg hover:shadow-black/20 text-white bg-primary-bg",
    white: "py-1 px-3 border border-border-primary hover:shadow-lg hover:shadow-black/15 text-black bg-white",
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
}) => {
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
