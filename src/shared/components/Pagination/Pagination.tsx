import { Button } from "@mui/material";
import "./pagination.scss";

export const Pagination = ({
  currentPage,
  totalPages,
  onNextClick,
  onPreviousClick,
}: PaginationProps) => {
  return (
    <div className="wrapper">
      <div>
        Showing {currentPage} of {totalPages}
      </div>
      <div className="buttons">
        <Button
          variant="outlined"
          onClick={onPreviousClick}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          variant="outlined"
          onClick={onNextClick}
          disabled={currentPage === totalPages}
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
}
