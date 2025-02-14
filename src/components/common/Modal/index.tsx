import { useModal } from "@/core/hooks/useModal.hooks";
import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode } from "react";

const themes = {
  navy: {
    background: "ucNavyBlue1",
    textColor: "ucWhite",
  },
  white: {
    background: "ucWhite",
    textColor: "ucBlack1",
  },
};

interface IProps {
  theme?: "navy" | "white";
  title: string;
  titleExtra?: ReactNode;
  children: ReactNode;
  isOpen: boolean;
  width: number;

  onClose: () => void;
}

const Modal: FC<IProps> = ({
  theme = "navy",
  title,
  titleExtra,
  children,
  isOpen,
  width,
  onClose,
}) => {
  useModal(isOpen);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-ucBlack/20 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            transition={{ duration: 0.35, ease: [0.35, 1, 0.4, 0.99] }}
            style={{ width: width + "px" }}
            className={`py-7 px-8 flex shadow-lg shadow-ucBlack/5 flex-col gap-6 items-center rounded-[40px] bg-${themes[theme].background} text-${themes[theme].textColor}`}
          >
            <div className=" w-full flex items-center justify-between">
              <span onClick={onClose} className="text-sm flex-1 cursor-pointer">
                Close
              </span>
              <h4 className=" text-xl font-bold font-montrealBold">{title}</h4>
              <div className="flex-1 items-center justify-end flex w-full">
                {titleExtra}
              </div>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
