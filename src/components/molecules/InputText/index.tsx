import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputText = ({ label, ...props }: Props) => {
  return (
    <label className="flex w-full flex-col">
      <span>{label}</span>
      <input
        type="email"
        {...props}
        className="h-10 border border-gray-200 px-4"
      />
    </label>
  );
};
