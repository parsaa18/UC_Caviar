import { useModal } from "@/core/hooks/useModal.hooks";
import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode } from "react";

const themes = {
  navy: {
    background: "ucNavyBlue1",
    textColor: "ucWhite",
  },
};

interface IProps {
  theme?: "navy";
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
          className="fixed inset-0 z-50 bg-ucWhite/10 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            transition={{ duration: 0.35, ease: [0.35, 1, 0.4, 0.99] }}
            style={{ width: width + "px" }}
            className={`py-7 px-8 flex flex-col gap-6 items-center rounded-3xl bg-${themes[theme].background} text-${themes[theme].textColor}`}
          >
            <div className=" w-full flex items-center justify-between">
              <span onClick={onClose} className="text-sm flex-1 cursor-pointer">
                Close
              </span>
              <h4 className=" text-xl font-bold font-montrealBold">{title}</h4>
              <span className="flex-1">{titleExtra}</span>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
