import { TextField } from "@mui/material";

export const SearchInput = ({ onChange, value }: SearchInputProps) => {
  return (
    <TextField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      placeholder="Search users by typing at least 3 letters"
    />
  );
};

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}
