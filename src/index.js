import { Box } from "@rocket.chat/fuselage";
import React from "react";
import PropTypes from "prop-types";
import {ChatBody} from "./components/ChatBody/index";
import {ChatHeader} from "./components/ChatHeader/index";
import {ChatInput} from "./components/ChatInput/index";

export const RCComponent = ({
  isClosable = false,
  setClosableState,
  moreOpts = false,
  width = "100%",
  height = "83vh",
}) => {
  if (isClosable && !setClosableState) {
    throw Error(
      "Please provide a setClosableState to props when isClosable = true"
    );
  }
  return (
    <Box width={width}>
      <ChatHeader
        isClosable={isClosable}
        setClosableState={setClosableState}
        moreOpts={moreOpts}
      />
      <ChatBody height={height} />
      <ChatInput />
    </Box>
  );
};

RCComponent.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isClosable: PropTypes.bool,
  setClosableState: PropTypes.func,
  moreOpts: PropTypes.bool,
};
