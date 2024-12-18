import { useDeviceContext } from "../DeviceProvider";
import "./DeviceAll.css";

import { Box } from "@mui/material";

export default function OS() {
  let { os } = useDeviceContext();

  return (
    <div className="info-container">
      <Box component="fieldset">
        <legend>OS</legend>
        <p>iOS: {os?.ios_ver}</p>
        <p>Build Number: {os?.build_num}</p>
      </Box>
    </div>
  );
}
