import { Button } from "@mui/material";
import "./pagination.scss";

export const Pagination = ({
  currentPage,
  totalPages,
  onNextClick,
  onPreviousClick,
  isDisalbed,
}: PaginationProps) => {
  return (
    <div className="wrapper">
      <div>
        Showing page {currentPage} of {totalPages} pages
      </div>
      <div className="buttons">
        <Button
          variant="outlined"
          onClick={onPreviousClick}
          disabled={currentPage === 1 || isDisalbed}
        >
          Previous
        </Button>
        <Button
          variant="outlined"
          onClick={onNextClick}
          disabled={currentPage === totalPages || isDisalbed}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPreviousClick: () => void;
  onNextClick: () => void;
  isDisalbed?: boolean;
}
