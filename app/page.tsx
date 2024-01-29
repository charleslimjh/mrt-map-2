"use client";

import React from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { maps } from "./allMaps";
import InteractiveMap from "../components/interactive-map";

export default function Home() {
  const [selectedMap, setselectedMap] = React.useState(["allmaps"]);

  const handleSelectionChange = (e: any) => {
    setselectedMap(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-center text-5xl pb-10">
        <h1>MRT Maps</h1>
      </div>

      <div className="flex w-full pb-3">
        <Select
          label="Select map to display"
          onChange={handleSelectionChange}
          defaultSelectedKeys={selectedMap}
        >
          {maps.map((m) => (
            <SelectItem key={m.value}>{m.name}</SelectItem>
          ))}
        </Select>
      </div>

      <InteractiveMap active={selectedMap} />
    </div>
  );
}
