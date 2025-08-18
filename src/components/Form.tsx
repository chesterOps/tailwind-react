import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

// Default interface
interface IDefault {
  label: string;
  helper?: string;
  error?: string;
}

// Input interface
interface Iinput extends React.InputHTMLAttributes<HTMLInputElement>, IDefault {
  type?: string;
  icon?: React.ReactElement;
}

// Select interface
interface ISelect
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    IDefault {}

// Password interface
interface IPassword
  extends IDefault,
    React.InputHTMLAttributes<HTMLInputElement> {}

// Textarea interface
interface ITextarea
  extends IDefault,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

// Checkbox interface
interface ICheckbox
  extends React.InputHTMLAttributes<HTMLInputElement>,
    IDefault {
  type?: "checkbox" | "switch";
}

// Radio interface
interface IRadio extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

// File interface
interface IFile extends React.InputHTMLAttributes<HTMLInputElement>, IDefault {}

// Default styles
const defaultStyles = `w-full disabled:bg-gray-50 disabled:cursor-not-allowed [&.icon]:pl-9 border border-gray-300 [&.error]:border-red-500 px-3 py-2.5 rounded-lg placeholder:text-gray-500 outline-none focus:ring-primary focus:border-primary`;

// Form
function Form({
  children,
  className = "",
  ...rest
}: React.FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form
      {...rest}
      className={`flex flex-col gap-y-5 ${className ? className : ""}`}
    >
      {children}
    </form>
  );
}

// Input
function Input({
  type = "text",
  label,
  className = "",
  helper,
  icon,
  error,
  ...rest
}: Iinput) {
  return (
    <div className="flex flex-col w-full gap-y-2 text-sm">
      <label className="font-medium text-gray-700">{label}</label>
      <div className="relative [&>svg]:absolute [&>svg]:fill-gray-500 [&>svg]:top-1/2 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:left-2.5 [&>svg]:translate-y-[-50%]">
        <input
          type={type}
          className={`${className ? className : ""} ${defaultStyles} ${
            error ? "error" : ""
          } ${icon ? "icon" : ""} `}
          {...rest}
        />
        {icon && icon}
      </div>
      {(error || helper) && (
        <p className={`${error ? "text-red-500" : "text-gray-500"} `}>
          {error || helper}
        </p>
      )}
    </div>
  );
}

// Select
function Select({
  label,
  className = "",
  children,
  helper,
  error,
  ...rest
}: ISelect) {
  return (
    <div className="flex flex-col w-full gap-y-2 text-sm">
      <label className="font-medium text-gray-700">{label}</label>
      <div className="relative">
        <select
          className={`${defaultStyles}  ${error ? "error" : ""} ${
            className ? className : ""
          } cursor-pointer appearance-none pr-[30px]`}
          {...rest}
        >
          {children}
        </select>
        <BsChevronDown className="fill-gray-500 w-4 h-4 absolute right-2.5 top-1/2 translate-y-[-50%] pointer-events-none" />
      </div>
      {(error || helper) && (
        <p className={`${error ? "text-red-500" : "text-gray-500"} `}>
          {error || helper}
        </p>
      )}
    </div>
  );
}

// Password
function Password({
  label,
  className = "",
  helper,
  error,
  ...rest
}: IPassword) {
  // Show password
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col w-full gap-y-2 text-sm">
      <label className="font-medium text-gray-700">{label}</label>
      <div className="relative [&>svg]:absolute [&>svg]:fill-gray-500 [&>svg]:top-1/2 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:left-2.5 [&>svg]:translate-y-[-50%]">
        <input
          type={`${show ? "text" : "password"}`}
          className={`${className ? className : ""} ${defaultStyles} ${
            error ? "error" : ""
          }  pr-[30px]`}
          {...rest}
        />
        <button
          onClick={() => setShow((s) => !s)}
          className="cursor-pointer absolute right-2.5 top-1/2 translate-y-[-50%] [&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-gray-500"
          type="button"
        >
          {show ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
        </button>
      </div>
      {(error || helper) && (
        <p className={`${error ? "text-red-500" : "text-gray-500"} `}>
          {error || helper}
        </p>
      )}
    </div>
  );
}

function Textarea({
  label,
  className = "",
  helper,
  error,
  ...rest
}: ITextarea) {
  return (
    <div className="flex flex-col w-full gap-y-2 text-sm">
      <label className="font-medium text-gray-700">{label}</label>
      <textarea
        className={`${className ? className : ""} ${defaultStyles} ${
          error ? "error" : ""
        }`}
        {...rest}
      />
      {(error || helper) && (
        <p className={`${error ? "text-red-500" : "text-gray-500"} `}>
          {error || helper}
        </p>
      )}
    </div>
  );
}

// Checkbox
function Checkbox({
  label,
  className,
  disabled,
  helper,
  error,
  type = "checkbox",
  ...rest
}: ICheckbox) {
  return (
    <div>
      <label
        className={`inline-flex gap-x-2 justify-start items-start ${
          disabled ? "opacity-80" : "cursor-pointer"
        }`}
      >
        <input
          type="checkbox"
          disabled={disabled}
          {...rest}
          className={`${className ? className : ""} sr-only peer`}
        />
        {type === "checkbox" ? (
          <span
            className={`w-4 h-4 ${
              error ? "border-red-500 bg-red-50" : "border-gray-300 bg-gray-100"
            } flex items-center mt-[2.5px] justify-center checkbox peer-checked:[&>svg]:inline-flex  border  rounded-sm peer-checked:bg-primary peer-checked:border-primary `}
          >
            <BiCheck fill="#fff" className="hidden h-4 w-4" />
          </span>
        ) : (
          <div className="relative w-11 h-6 bg-gray-200 transition-all rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-primary" />
        )}

        <div className="flex flex-col">
          <p className="text-sm text-gray-700 font-medium">{label}</p>
          {(error || helper) && (
            <span
              className={`${error ? "text-red-500" : "text-gray-500"} text-xs`}
            >
              {error || helper}
            </span>
          )}
        </div>
      </label>
    </div>
  );
}

// Radio
function Radio({ label, id, className, ...rest }: IRadio) {
  return (
    <div className="flex items-center gap-x-2">
      <div className="text-sm relative flex items-center">
        <input
          type="radio"
          id={id}
          className={` ${
            className ? className : ""
          } appearance-none w-4 h-4 rounded-full cursor-pointer bg-gray-100 border-1  checked:bg-primary checked:[&~span]:inline-block checked:border-primary border-gray-300`}
          {...rest}
        />
        <span className="hidden size-1.5 bg-white rounded-full absolute pointer-events-none top-1/2 left-1/2 translate-[-50%]" />
      </div>
      <label
        htmlFor={id}
        className="block cursor-pointer text-sm font-medium text-gray-700"
      >
        {label}
      </label>
    </div>
  );
}

// Fieldset
function Fieldset({
  legend,
  children,
  direction = "column",
}: {
  legend?: string;
  direction?: "column" | "row";
  children: React.ReactNode;
}) {
  return (
    <fieldset>
      {legend && <legend className="sr-only">{legend}</legend>}
      <div
        className={`flex gap-4 ${
          direction === "row" ? "flex-row" : "flex-col"
        }`}
      >
        {children}
      </div>
    </fieldset>
  );
}

function File({ label, error, id, name, helper, className, ...rest }: IFile) {
  // File
  const [file, setFile] = useState<File | undefined>(undefined);
  return (
    <div className="flex flex-col w-full gap-y-2 text-sm">
      <span className="font-medium text-gray-700">{label}</span>
      <input
        type="file"
        id={id || name}
        name={name}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) setFile(file);
        }}
        className={`${
          className ? className : ""
        } hidden appearance-none w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer p-2.5 bg-gray-50`}
        {...rest}
      />
      <div className="flex  bg-gray-50  overflow-hidden rounded-lg border border-gray-300">
        <label
          className="cursor-pointer flex w-full items-center gap-4"
          htmlFor={id || name}
        >
          <span className="py-2.5 px-4  text-white transition-all ease-in-out hover:bg-gray-900 font-medium bg-gray-800 inline-block">
            Choose File
          </span>
          <span className="flex-[1] pr-2.5 whitespace-nowrap overflow-ellipsis overflow-hidden">
            {file?.name || "No file chosen"}
          </span>
        </label>
      </div>
      {(error || helper) && (
        <p className={`${error ? "text-red-500" : "text-gray-500"} `}>
          {error || helper}
        </p>
      )}
    </div>
  );
}

Form.Input = Input;
Form.Select = Select;
Form.Password = Password;
Form.Textarea = Textarea;
Form.Checkbox = Checkbox;
Form.Radio = Radio;
Form.Fieldset = Fieldset;
Form.File = File;

export default Form;
