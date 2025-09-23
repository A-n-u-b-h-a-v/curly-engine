import { ChangeEvent } from "react";


interface LabelInputs {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    inputType?: string;
}

function AuthInput({ label, placeholder, value, onChange, inputType = "text" }: LabelInputs) {
    return (


        <div className="w-3/4 lg:w-full  bg-white rounded-lg mb-2 ">
            <p className=" p-2 font-semibold">
                {label}
            </p>
            <input
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="outline-zinc-800 border border-zinc-300  w-full  px-2 py-3 rounded-md "
            />

        </div>


    );
}


export default AuthInput;
