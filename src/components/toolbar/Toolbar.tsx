import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { FaTrash } from "react-icons/fa";

interface ToolbarProps {
  selectedCount: number;
  onDelete: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ selectedCount, onDelete }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center mt-10 mb-3">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild className="justify-center items-center">
            <Button
              className="bg-red-600 text-white hover:bg-red-700"
              disabled={selectedCount === 0}
              onClick={() => setOpen(true)}
            >
              <FaTrash />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Are you sure you want to delete the selected books?
              </DialogTitle>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() => {
                  onDelete();
                  setOpen(false);
                }}
              >
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Toolbar;
