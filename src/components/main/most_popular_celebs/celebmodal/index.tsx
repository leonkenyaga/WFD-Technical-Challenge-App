import * as React from "react";
import Modal from "@mui/material/Modal";
import { isModalOpen } from "../../../../State/store";
import { useSnapshot } from "valtio";
import { Box } from "@mui/material";
import ModalTitle from "./modaltitle";
import ModalContent from "./modalcontent";
import DreamshareButton from "../../../shared_components/dreamsharebutton";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

export default function CelebModal() {
  const modalOpen = useSnapshot(isModalOpen);

  const handleModal = () => {
    isModalOpen.state = false;
  };

  return (
    <Modal
      open={modalOpen.state}
      aria-labelledby="Most Popular Celebs"
      aria-describedby="Most Popular Celebrities' names, images  and biography"
    >
      <Box
        sx={style}
        className="bg-white w-[300px] h-[500px] md:w-[500px] md:h-[550px] relative"
      >
        <ModalTitle />
        <ModalContent />
        <div
          style={{ zIndex: 1 }}
          className="bg-white fixed bottom-0 left-0 right-0 pt-[15px] shadow-lg px-4"
        >
          <DreamshareButton filled={true} onClick={handleModal}>
            Close
          </DreamshareButton>
        </div>
      </Box>
    </Modal>
  );
}
