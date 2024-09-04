import { TextField } from "@mui/material";

export const SearchInput = ({ onChange, value }: SearchInputProps) => {
  return (
    <TextField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
    />
  );
};

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}
