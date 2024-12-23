import { useDeviceContext } from "../DeviceProvider";
import "./DeviceAll.css";
import React from "react";

import { Box } from "@mui/material";

const Storage: React.FC = () => {
  let { storage } = useDeviceContext();

  return (
    <div className="info-container">
      <Box component="fieldset">
        <legend>Storage</legend>
        <p>Total Storage: {storage?.total_storage}GB</p>
        <p>Used Storage: {storage?.used_storage}GB</p>
        <p>Available Storage: {storage?.available_storage}GB </p>
      </Box>
    </div>
  );
};

export default Storage;
