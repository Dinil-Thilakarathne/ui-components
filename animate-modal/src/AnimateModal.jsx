import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";

const AnimateModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="modal-wrapper">
      <button
        onClick={() => setIsOpen(true)}
        className="modal-btn"
      >
        Open Modal
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const Modal = ({ isOpen, setIsOpen }) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="modal"
          >
            <motion.div
              initial={{ scale: 0, rotate: "14.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="modal-box"
            >
              <FiAlertCircle className="modal-bg-icon" />

              <div className="modal-content">

                <FiAlertCircle className="modal-content__icon"/>

                <h3 className="modal-content__header">
                  One more thing!
                </h3>
                <p className="modal-content__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  aperiam vitae, sapiente ducimus eveniet in velit.
                </p>
                <div className="modal-content__btns">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="btn-secondary"
                  >
                    Nah, go back
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="btn-primary"
                  >
                    Understood!
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
};

export default AnimateModal