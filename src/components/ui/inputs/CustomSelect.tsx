import { type FC, useState } from "react";
import Typography from "../typography/Typography";
import { ChevronDown, Search } from "lucide-react";

export interface Option {
    value: string
    label: string
    avatar: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  onSelect?: (option: Option) => void;
  wrapperClass?: string;
}

const CustomSelect: FC<SelectProps> = ({
  label,
  options,
  onSelect,
  wrapperClass,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setOpen(false);
    onSelect?.(option);
  };

  return (
    <div className={`relative ${wrapperClass}`}>
      <label className="mb-1 block">{label}</label>

      {/* Selected value */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-2 cursor-pointer rounded-lg border border-[#FFFFFF14] px-3 py-1 bg-[#FFFFFF14] h-12"
      >
        <div className="flex items-center gap-2">
          <Search style={{ height: '24px', width: '24px', color: '#FFF' }} />
          {selected ? (
            <div className="flex items-center gap-2 border border-[#FFFFFF14] p-2 rounded-lg">
              {selected.avatar && (
                <img src={selected.avatar} className="w-6 h-6 rounded-full" />
              )}
              <Typography variant="span" className="text-white text-sm">
                {selected.label}
              </Typography>
            </div>
          ) : (
            <Typography variant="span" className="text-sm">
              Select doctor
            </Typography>
          )}
        </div>

        <ChevronDown style={{ height: '24px', width: '24px', color: '#FFF' }}/>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border border-[#FFFFFF14] bg-[#1A1D21F5] p-2 space-y-1">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option)}
              className="flex items-center gap-2 cursor-pointer rounded-xl py-2.5 px-3 hover:bg-[#FFFFFF14]"
            >
              {option.avatar && (
                <img src={option.avatar} className="w-6 h-6 rounded-full" />
              )}
              <Typography
                variant="span"
                className="text-white font-semibold text-[12px]"
              >
                {option.label}
              </Typography>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
